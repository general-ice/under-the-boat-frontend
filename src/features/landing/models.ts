export interface IGameRoom {
    image?: string
    gamePort: number
    title?: string
    description?: string
    maxPlayers: number
    currentPlayers: number
}