import { Role } from "../enums/Role";

export interface User {
    id: Number,
    username: String,
    email: String,
    password: String,
    role: Role
}