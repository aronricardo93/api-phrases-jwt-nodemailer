import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/db'

export interface PhraseIntance extends Model {
    id: number,
    author: string,
    txt: string,
}

export const Phrase = sequelize.define<PhraseIntance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    },
},
    {
        tableName: 'phrases',
        timestamps: true
})