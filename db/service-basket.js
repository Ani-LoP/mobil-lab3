import {enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const basketTableName = 'basket'

export const createBasketTable = async (db) => {
    // create table if not exists
    const query = `CREATE TABLE IF NOT EXISTS ${basketTableName} (
        id_good INTEGER NOT NULL,
        FOREIGN KEY (id_good) REFERENCES goods(id)
    );`;

    await db.executeSql(query);
};

export const saveBasket = async (db, basketItem) => {
    const insertQuery =
        `INSERT OR REPLACE INTO ${basketTableName} (id_good) VALUES (${basketItem.id_good})`
    console.log('Добавление в корзину')
    return db.executeSql(insertQuery);
};

export const getGoodFromBasket = async (db) => {
    const query = `select * from goods join basket on goods.id=basket.id_good`
    const results =  await db.executeSql(query)
    const basket = [];
    results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
            //console.log('!!!' + result.rows.item(index))
            basket.push(result.rows.item(index))
        }
    });
    return basket;
}


export const getBaskets = async (db) => {
    try {
        const basket = [];
        const results = await db.executeSql(`SELECT * FROM ${basketTableName}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                //console.log('!!!' + result.rows.item(index))
                basket.push(result.rows.item(index))
            }
        });
        //console.log('получение корзины: ' + basket[1].id_good)
        return basket;
    } catch (error) {
        console.error(error);
        throw Error('Failed to get basket !!!');
    }
};

export const deleteFromBaskett = async (db, id) => {
    const deleteQuery = `DELETE from ${basketTableName} where id_good = ${id}`;
    await db.executeSql(deleteQuery);
};

export const deleteBasketTable = async (db) => {
    const query = `drop table ${basketTableName}`;
    console.log('Удаление таблицы ' + basketTableName)
    await db.executeSql(query);
};