import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "./style/style";

export default props => {
    return (
            <View style={style.ListLocation}>
                <Text style={style.ListTextPrimary}> {props.pointLocation}</Text>
                <Text style={style.ListTextSecondary}> {props.region}</Text>
            </View>
    )
}

const style = StyleSheet.create(
    {
        ListLocation: {
            borderBottomWidth: 1,
            borderColor: '#9b9ab1',
            marginTop: 8,
            width: "100%",
            padding: 16,
        },

        ListTextPrimary:{
            fontSize: 18,
            color: "#000"
        },

        ListTextSecondary:{
            fontSize: 14,
            fontWeight:"bold",
            color: "#3a86ff",
        },
    }
)
