import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "../style/style";
import SucessCity from "../SucessCity";

export default props => {

    return (
        <View style={estilo.Views}>
        <View style={{flexGrow: 1, width:"100%",backgroundColor: "#dfddfe"}}>

            <View style={style.ListLocation}>
                <SucessCity pointLocation={"Torre Eiffel"} region={"Champs de Mars"} />
                <SucessCity pointLocation={"Torre Eiffel"} region={"Champs de Mars"} />
                <SucessCity pointLocation={"Torre Eiffel"} region={"Champs de Mars"} />
                <SucessCity pointLocation={"Torre Eiffel"} region={"Champs de Mars"} />
            </View>
        </View>

        <Pressable style={style.ButtonAdd} onPress={() => props.navigation.navigate('CityParis')}>
                <Text style={style.ButtonText}>to go back</Text>
        </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        ButtonAdd: {
            alignItems: "center",
            marginTop: 8,
            backgroundColor: "#3a86ff",
            width: "100%",
            padding: 10,
            borderRadius: 8
        },

        ButtonText: {
            fontSize: 16,
            color: "#fff"
        }
    }
)