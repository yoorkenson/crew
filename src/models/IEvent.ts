export interface IEvent {
    id: number
    author: string
    members: number[]
    location: string
    emoji: string
    slug: string
    date: string
    time: string
    group_size: number
    color: string
    description: string
    chat: string
    link: string
    title: {
        rendered: string
    }
}