import {
    combine,
    createEffect,
    createEvent,
    createStore,
    createStoreObject,
    guard,
    merge,
    sample,
    Store
} from "effector";
import {getRooms} from "../api";
import {IGameRoom} from "../models";

const getData = createEffect({ handler: getRooms });

const startWatching = createEvent()
const updateOnce = createEvent()
const stopWatching = createEvent()

const $watching = createStore(false);

$watching
    .on(startWatching, _ => true)
    .on(stopWatching, _ => false);

const $nextUpdate: Store<boolean> = combine($watching, s => s)

const unsetNextUpdate = createEvent()

$nextUpdate
    .on(updateOnce, _ => true)
    .on(unsetNextUpdate, _ => false)

const $rooms = createStore<IGameRoom[]>([])

const clock = merge([startWatching, updateOnce])

// Trigger get data after clock call
sample({
    // @ts-ignore
    source: $nextUpdate,
    clock,
    target: getData
})

$rooms
    .on(getData.doneData, (_, data) => (data as any))

const timeoutEffect = createEffect({handler: () => new Promise(res => setInterval(res, 3000))})

const helpStore = createStoreObject({
    next: $nextUpdate,
    watching: $watching
})

// Event with source as argument and calling as clock clocking

const sampleDataLoad = sample({
    source: helpStore,
    clock: getData.doneData
})

// get data done handler
sampleDataLoad.watch(({next, watching}) => {
    switch (true) {
        case next && watching:
            timeoutEffect()
        case next:
            unsetNextUpdate();
            break;
        case watching:
            timeoutEffect()
            break;
    }
})

// Trigger update if watching mode is on after timeout expire
guard({
    // @ts-ignore
    source: timeoutEffect.done,
    filter: $watching.map(i => i),
    target: updateOnce
})

export {$rooms, updateOnce, startWatching, stopWatching}