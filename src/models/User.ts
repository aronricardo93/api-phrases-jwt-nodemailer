import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../instances/db";

export interface User extends Model{
    id: number,
    email: string,
    password: string
}

export const User = sequelize.define<User>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
},
    {
        tableName: 'users',
        timestamps: true
})