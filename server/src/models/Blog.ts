import { Tag } from "./Tag"

export interface Blog {
    date: Date,
    text: String,
    author: String
    title: String,
    tags: Tag[]
}