import React from 'react'
import {Image, StyleSheet, Text, TouchableHighlight, View, Button} from "react-native";
import {BoxShadow} from 'react-native-shadow'
//import removeFromBasketButton from '../../assets/icons/icon-delete.png'
//import Stars from "../Stars";

const info={
    sum: 35620
}

export default function BasketSum({sum}) {
    return (
        <View style={styles.outerContainer}>
            <Text>Оплата</Text>
        </View>
    )
}

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

const styles = StyleSheet.create({
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
        alignItems: 'center'
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
    }
})
