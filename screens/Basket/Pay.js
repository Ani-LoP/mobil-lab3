import {Button, View, Text, StyleSheet} from "react-native";


export default function Pay({navigation}) {
    return (
        <View style={styles.containerGood}>
            <Text>Страница оплаты заказа</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerGood: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
})