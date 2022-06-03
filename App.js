import React, {useEffect, useState} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AboutAs from "./screens/AboutAs";
import BasketStack from "./screens/Basket/BasketStack";
import 'react-native-gesture-handler';
import StackContainer from "./screens/CatalogStack/StackContainer";


const App = () => {
    /*
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([]);
    const createTables = () => {
        db.transaction(txn => {
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))`,
                [],
                (sqlTxn, res) => {
                    console.log('table created successfully')
                },
                error => {
                    console.log('error on creating table ' + error.message)
                },
            )
        })
    }
    const addCategory = () => {
        if (!category) {
            alert("Enter category");
            return false;
        }

        db.transaction(txn => {
            txn.executeSql(
                `INSERT INTO categories (name) VALUES (?)`,
                [category],
                (sqlTxn, res) => {
                    console.log(`${category} category added successfully`);
                    getCategories();
                    setCategory("");
                },
                error => {
                    console.log("error on adding category " + error.message);
                },
            );
        });
    };
    const getCategories = () => {
        db.transaction(txn => {
            txn.executeSql(
                `SELECT * FROM categories ORDER BY id DESC`,
                [],
                (sqlTxn, res) => {
                    console.log("categories retrieved successfully");
                    let len = res.rows.length;

                    if (len > 0) {
                        let results = [];
                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i);
                            results.push({id: item.id, name: item.name});
                        }

                        setCategories(results);
                    }
                },
                error => {
                    console.log("error on getting categories " + error.message);
                },
            );
        });
    };
    const renderCategory = ({item}) => {
        return (
            <View style={{
                flexDirection: "row",
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderBottomWidth: 1,
                borderColor: "#ddd",
            }}>
                <Text style={{marginRight: 9}}>{item.id}</Text>
                <Text>{item.name}</Text>
            </View>
        );
    };
    useEffect(async () => {
        await createTables();
        await getCategories();
    }, [])
    */



    const Drawer = createDrawerNavigator();
    function MyDrawer() {
        return (
            <Drawer.Navigator initialRouteName="Корзина" useLegacyImplementation={true}>
                <Drawer.Screen name="Корзина" component={BasketStack}/>
                <Drawer.Screen name="Популярное" component={StackContainer}/>
                <Drawer.Screen name="Смартфоны" component={StackContainer} />
                <Drawer.Screen name="Ноутбуки" component={StackContainer} />
                <Drawer.Screen name="О нас" component={AboutAs} />
            </Drawer.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
};

export default App;
