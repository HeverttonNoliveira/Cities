import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "../style/style";

export default props => {
    const [Location, SetLocation] = useState('');

    return (
        <View style={estilo.Views}>

            <View style={
            {   
                justifyContent:"center",
                alignItems:"center",
                flexGrow: 1,
                width:"100%",
                backgroundColor: "#dfddfe"
            }
            }>
                <TextInput
                    style={style.inputStyle}
                    onChangeText={"onChangeText"}
                    value={Location}
                    placeholder="Location not found. Do you want to add?"
                    keyboardType="default"
                />
            </View>

            <Pressable style={style.ButtonLocation} onPress={() => props.navigation.navigate('PointParis')}>
                <Text style={style.ButtonText}>Location Name</Text>
            </Pressable>
            <Pressable style={style.ButtonLocation} onPress={() => props.navigation.navigate('PointParis')}>
                <Text style={style.ButtonText}>Location Info</Text>
            </Pressable>
            <Pressable style={style.ButtonAdd} onPress={() => props.navigation.navigate('PointParis')}>
                <Text style={style.ButtonText}>Add Location</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create(
    {
        inputStyle: {
            textAlign: "center",
            width: "100%",
            marginTop: 8,
            marginBottom: 4,
            padding: 14,
            fontSize: 16,
            borderBottomWidth: 1,
            borderColor: "#3a86ff",
            borderRadius: 8
        },

        TextBorde: {
            alignItems: "center",
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "#3a86ff"
        },

        FontText: {
            marginBottom: 4,
            fontSize: 18,
        },

        FontSecondColor: {
            fontWeight: "bold",
        },

        ButtonLocation: {
            marginTop: 8,
            backgroundColor: "#3a86ff",
            width: "100%",
            padding: 10,
            borderRadius: 8
        },

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