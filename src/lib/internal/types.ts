export type ClickIdEntity<T = string> = (id: T) => void

type Nullable<T> = null | T

export type NullableString = Nullable<string>
export type NullableNumber = Nullable<number>