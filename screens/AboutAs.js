import React from 'react'
import {Button, View, Text, StyleSheet, Dimensions} from "react-native";
//import MapView from 'react-native-maps';

export default function AboutAs({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', margin: 10}}>
            <Text style={styles.h1}>Магазин техники МагТех</Text>
            <Text style={styles.text}>Заказывайте технику у нас или приходите в гости по адресу Академика Киренского
                26к1</Text>
            {//<MapView style={styles.map}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontWeight: "bold",
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    map: {
        width: '90%',
        height: 250,
    },
})