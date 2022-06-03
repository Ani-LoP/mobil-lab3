import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const goodTableName = 'goods'

export const getDBConnection = async () => {
    return openDatabase({name: "magteh-shop", location: 'default'});
};

export const createGoodsTable = async (db) => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${goodTableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(30),
        price INTEGER,
        mainImg TEXT
    );`;

    await db.executeSql(query);
};

export const saveGoods = async (db, goodsItems) => {
    const insertQuery =
        `INSERT OR REPLACE INTO ${goodTableName} (id, name, price, mainImg) VALUES` +
        goodsItems.map(i => `(${i.id}, '${i.name}', ${i.price}, '${i.mainImg}')`).join(',');
    console.log('Добавление товаров')
    return db.executeSql(insertQuery);
};

export const getGoods = async (db) => {
    try {
        const goods = []; //const todoItems: ToDoItem[] = [];
        const results = await db.executeSql(`SELECT * FROM ${goodTableName}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                //console.log(result.rows.item(index))
                goods.push(result.rows.item(index))
            }
        });
        //console.log('получение товаров: ' + goods)
        return goods;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get goods !!!');
    }
};



export const deleteTable = async (db) => {
    const query = `drop table ${goodTableName}`;
    console.log('Удаление таблицы ' + goodTableName)
    await db.executeSql(query);
};