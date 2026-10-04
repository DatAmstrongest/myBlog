import { Tag } from "./Tag"

export interface Blog {
    id: Number,
    date: Date,
    text: String,
    author_id: Number,
    title: String,
    tags: Tag[]
}