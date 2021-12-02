export interface IEvent {
    id: string
    creatorId: string
    membersId: Array<string>
    location: string
    emoji: string
    title: string
    date: string
    maxMembers: number
}