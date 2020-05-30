import {NullableString} from "lib/internal/types";

export interface IPlayer {
    clientToken: NullableString
    nickname?: NullableString
    stats?: NullableString
    activeGame?: NullableString
}