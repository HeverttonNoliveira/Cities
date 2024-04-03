import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "./style/style";

export default props => {
    const [city, SetCity] = useState('');
    const [Country, SetCountry] = useState('');

    return (
        <View style={estilo.Views}>
            <Text style={style.Title}>Cities</Text>
            <TextInput
            style={style.inputStyle}
                onChangeText={"onChangeText"}
                value={Country}
                placeholder="France"
                keyboardType="default"
            />
            <TextInput
            style={style.inputStyle}
                onChangeText={"onChangeText"}
                value={city}
                placeholder="Paris"
                keyboardType="default"
            />
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('City')}>
                <Text style={style.ButtonText}>Add City</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        Title: {
            fontSize: 32,
            fontWeight: "bold",
            color: "#3a86ff"
        },

        inputStyle: {
            backgroundColor: "#ffffff",
            width: "100%",
            marginTop: 8,
            marginBottom: 4,
            padding: 14,
            fontSize:16,
            borderWidth: 1,
            borderColor: "#d9d9d9",
            borderRadius: 8
        },

        ButtonAdd:{
            marginTop: 8,
            backgroundColor: "#3a86ff",
            width:"100%",
            textAlign:"center",
            alignItems:"center",
            padding: 16,
            borderRadius:8
        },

        ButtonText:{
            fontSize: 16,
            color: "#fff"
        }
    }
)