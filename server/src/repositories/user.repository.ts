import { OkPacket, ResultSetHeader } from "mysql2";

import connection from "../db";
import { User } from "../models/user.model";

interface IUserRepository {
    save(user: User): Promise<number>;
    retrieveAll(): Promise<User[]>;
    retrieveById(userId: number): Promise<User | undefined>;
    update(user: User): Promise<number>;
    delete(userId: number): Promise<number>;
}

class UserRepository implements IUserRepository {
    save(user: User): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>(
                "INSERT INTO Users (username, email, password, role) VALUES (?, ?, ?, ?)", 
                [user.username, user.email, user.password, user.role],
                (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result.insertId);
                }
            )
        })
    }

    retrieveAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            connection.query<User[]>(
                "SELECT * FROM Users",
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                }
                
            )
        })
    }

    //TODO: Check for results is empty or not might be needed
    retrieveById(userId: number): Promise<User | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<User[]>(
                "SELECT * FROM Users WHERE id = ?", 
                [userId], 
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results[0]);
                }
            )
        })
    }

    update(user: User): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>(
                "UPDATE Users SET username = ?, email = ?, password = ?, role = ? WHERE id = ?", 
                [user.username, user.email, user.password, user.role, user.id],
                (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result.affectedRows);
                }
            )
        })
    }

    delete(userId: number): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.query<ResultSetHeader>(
                "DELETE FROM Users WHERE id = ?", 
                [userId],
                (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result.affectedRows);
                }
            )
        })
    }
    
}

export default new UserRepository();