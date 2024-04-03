import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "./style/style";

export default props => {
    const [city, SetCity] = useState('');
    const [Country, SetCountry] = useState('');

    return (
        <View style={estilo.Views}>

            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('CityParis')}>
                <Text style={style.ButtonTextPrimary}>Paris</Text>
                <Text style={style.ButtonTextSecondary}>France</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('CityTokyo')}>
                <Text style={style.ButtonTextPrimary}>Tokyo</Text>
                <Text style={style.ButtonTextSecondary}>Japan</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('')}>
                <Text style={style.ButtonTextPrimary}>Amsterdam</Text>
                <Text style={style.ButtonTextSecondary}>Netherlands</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('')}>
                <Text style={style.ButtonTextPrimary}>Portland</Text>
                <Text style={style.ButtonTextSecondary}>USA</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('')}>
                <Text style={style.ButtonTextPrimary}>Mumbai</Text>
                <Text style={style.ButtonTextSecondary}>India</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('')}>
                <Text style={style.ButtonTextPrimary}>London</Text>
                <Text style={style.ButtonTextSecondary}>England</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('')}>
                <Text style={style.ButtonTextPrimary}>Barcelona</Text>
                <Text style={style.ButtonTextSecondary}>Spain</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={()=> props.navigation.navigate('')}>
                <Text style={style.ButtonTextPrimary}>São Paulo</Text>
                <Text style={style.ButtonTextSecondary}>Brazil</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create(
    {
        ButtonAdd:{
            borderBottomWidth: 1,
            borderColor: '#9b9ab1',
            marginTop: 8,
            width:"100%",
            padding: 16,
            borderRadius:8
        },

        ButtonTextPrimary:{
            fontSize: 18,
            color: "#000"
        },

        ButtonTextSecondary:{
            fontSize: 14,
            fontWeight:"bold",
            color: "#3a86ff",
        }
    }
)