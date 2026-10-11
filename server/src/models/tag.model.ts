import { TagText } from "../enums/TagText";
import { RowDataPacket } from "mysql2"

export interface Tag extends RowDataPacket {
    id: Number,
    text: TagText
}