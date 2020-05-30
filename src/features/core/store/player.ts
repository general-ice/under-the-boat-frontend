import {createEffect, restore} from "effector";
import {IPlayer} from "../models";

const defaultPlayer: IPlayer = {
    clientToken: null,
    nickname: null,
    activeGame: null,
    stats: null
}

const initPlayer = createEffect({
    handler: () => {
        const playerField = Object.keys(defaultPlayer)
        return playerField
            .reduce<IPlayer>((acc, field) => ({...acc, [field]: window.localStorage.getItem(field) || null}), {} as IPlayer)
    }
})

const $player = restore<IPlayer>(initPlayer, null)

$player.watch(state => {
    console.log('Player store', state);
    if (state)
        Object.keys(state).forEach(k => {
            window.localStorage.setItem(k, state[k as keyof IPlayer] as string)
        })
})

export {$player, initPlayer}