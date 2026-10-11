import { Role } from "../enums/Role";
import { RowDataPacket } from "mysql2"

export interface User extends RowDataPacket {
    id: Number,
    username: String,
    email: String,
    password: String,
    role: Role
}