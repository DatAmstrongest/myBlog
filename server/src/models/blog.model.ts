import { Tag } from "./tag.model"
import { RowDataPacket } from "mysql2"


export interface Blog extends RowDataPacket {
    id: Number,
    date: Date,
    text: String,
    author_id: Number,
    title: String,
    tags: Tag[]
}