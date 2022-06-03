import React, {useCallback, useEffect, useState} from 'react'
import {Button, View, Text, StyleSheet} from "react-native";
import BasketGood from "../../components/Basket/BasketGood";
import {BoxShadow} from "react-native-shadow";
import {createGoodsTable, getDBConnection, getGoods, saveGoods} from "../../db/service-good";
import {createBasketTable, deleteFromBaskett, getBaskets, getGoodFromBasket} from "../../db/service-basket";

export default function Basket({navigation}) {
    const [goods, setGoods] = useState([]);
    const [sum, setSum] = useState(0)
    const loadDataCallBack = useCallback( async () => {
        try{
            const db = await getDBConnection();
            const storedGoodsItem = await getGoodFromBasket(db)
            console.log('goods in basket:  ' + storedGoodsItem)
            if (storedGoodsItem.length) {
                setGoods(storedGoodsItem)
                let s = 0
                storedGoodsItem.map(item => {
                    s += item.price
                })
                console.log('Сумма = ' + s)
                setSum(s)
            }
        } catch (error){
            console.error(error)
        }
    }, [])

    useEffect(()=>{
        loadDataCallBack();
    }, [loadDataCallBack])

    const deleteFromBasket = async (id) => {
        try {
            const db = await getDBConnection();
            await deleteFromBaskett(db, id);
            const storedBasket = await getGoodFromBasket(db)
            setGoods(storedBasket)
            let s = 0
            storedBasket.map(item => {
                s += item.price
                console.log('= ' + item)
            })
            console.log('Сумма = ' + s)
            setSum(s)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.containerGood}>
            <BoxShadow setting={shadowOpt}>
                <View style={styles2.container}>
                    <View style={styles2.info}>
                        <Text style={styles2.text}>Общая сумма</Text>
                        <Text style={styles2.sum} numberOfLines={2}>{sum}</Text>
                        <Text style={styles2.text}>рублей</Text>
                    </View>
                    <Button style={{height: '80%'}} title={'Перейти к оплате'}
                            onPress={
                                () => navigation.navigate('Оплата')
                            }
                    />
                </View>
            </BoxShadow>
            {goods.map(el => <BasketGood key={el.id} good={el} deleteItem={deleteFromBasket}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    containerGood: {
        //backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: "center",
        marginHorizontal: 20,
    },
})

const containerWidth = 380;
const containerHeight = 120;

const shadowOpt = {
    width: containerWidth,
    height: containerHeight,
    color: "#000",
    border: 10,
    radius: 3,
    opacity: 0.1,
    x: 8,
    y: 8,
    style: {marginVertical: 5}
}

const styles2 = StyleSheet.create({
    outerContainer: {
        margin: 5
    },
    container: {
        width: containerWidth,
        height: containerHeight,
        backgroundColor: 'white',
        borderRadius: 6,
        //margin: 15,
        //shadowOffset: {width: 8, height: 8,},
        //shadowColor: 'rgba(0, 0, 0, 0.25)',
        //shadowOpacity: 1.0,
        //shadowRadius: 10,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
        /*box-shadow: '2px 5px 8px 1px rgba(0, 0, 0, 0.25)'*/
    },
    mainImageContainer: {
        width: 80,
        height: 70,
        backgroundColor: 'pink',
        marginRight: 10
    },
    mainImage: {
        height: 70,
        //width: 'auto',
    },
    content: {
        width: 100,
        height: 150,
        backgroundColor: 'yellow'
    },
    sum: {
        color: '#535050',
        fontWeight: '700',
        fontSize: 32
    },
    info: {
        flex: 3
    },
    text: {
        fontSize: 15
    }
})