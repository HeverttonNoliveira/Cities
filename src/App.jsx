import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddCity from "./components/AddCity";
import City from "./components/City";
import Paris from "./components/locationCity/Paris";
import Tokyo from "./components/locationCity/Tokyo";
import NotCityParid from "./components/addLocation/addCityParis";
import NotCityTokyo from "./components/addLocation/addCityTokyo";

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="AddCity">
                    <Stack.Screen name="AddCity" component={AddCity} options={{headerTitleAlign:"center", title:"Welcome"}}/>
                    <Stack.Screen name="City" component={City} options={{headerTitleAlign:"center"}}/>

                    {/* location City */}
                    <Stack.Screen name="CityParis" component={NotCityParid} options={{headerTitleAlign:"center", title:"Paris"}}/>
                    <Stack.Screen name="CityTokyo" component={NotCityTokyo} options={{headerTitleAlign:"center", title:"Tokyo"}}/>

                    {/* AddLocation */}
                    <Stack.Screen name="PointParis" component={Paris} options={{headerTitleAlign:"center", title:"Paris"}}/>
                    <Stack.Screen name="PointTokyo" component={Tokyo} options={{headerTitleAlign:"center", title:"Paris"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

