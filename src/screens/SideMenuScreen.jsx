import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MenuHomeIcon from "../assets/icons/icons14";
import HomeHeartIcon from "../assets/icons/icons15";
import HomeLogoutIcon from "../assets/icons/icons16";
import { auth } from "../utility/Firebase";

const SideMenuScreen = props => {

    const navigateToSideHomeScreen = () => {
        props.navigation.navigate("HomeScreen");
    };
    const navigateToLogoutScreen = () => {
        auth().signOut()
        props.navigation.navigate("LoginScreen");
    };
    const navigateToFavScreen = () => {
        auth().signOut()
        props.navigation.navigate("FavouriteScreen");
    };
    const navigateToProfileScreen = () => {
        props.navigation.navigate("ProfileScreen");
    };
    return (
        <View style={styles.container}>
            <View style={styles.picNameStyle}>
                <Image style={styles.Image} source={require('../assets/images/denny.png')} />
                <View style={styles.nameViewstyle}>
                    <Text style={styles.namestyle}>Denny</Text>
                    <TouchableOpacity
                    onPress={navigateToProfileScreen}
                    >
                        <Text style={styles.Viewstyle}>View Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.homeViewstyle}>
                <MenuHomeIcon />
                <TouchableOpacity
                onPress={navigateToSideHomeScreen}
                >
                    <Text style={styles.homestyle}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.heartViewstyle}>
                <HomeHeartIcon />
                <TouchableOpacity
                onPress={navigateToFavScreen}
                >
                    <Text style={styles.favouritestyle}>Favourite</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.logoutViewstyle}>
                <HomeLogoutIcon />
                <TouchableOpacity
                onPress={navigateToLogoutScreen}
                >
                    <Text style={styles.logoutstyle}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
        width: "100%",
    },
    Image: {
        height: 70,
        width: 70,
    },
    picNameStyle: {
        marginTop: 59,
        marginLeft: 36,
        flexDirection: "row"
    },
    nameViewstyle: {
        marginLeft: 19,
    },
    namestyle: {
        fontSize: 27,
        color: "white",
    },
    Viewstyle: {
        fontSize: 12,
        color: "#FF6B00"
    },
    homeViewstyle: {
        flexDirection: "row",
        marginLeft: 36,
        marginTop: 51
    },
    homestyle: {
        marginLeft: 53,
        fontSize: 24,
        color: "white"
    },
    heartViewstyle: {
        flexDirection: "row",
        marginLeft: 36,
        marginTop: 51
    },
    favouritestyle: {
        marginLeft: 53,
        fontSize: 24,
        color: "white"
    },
    logoutstyle: {
        marginLeft: 53,
        fontSize: 24,
        color: "white"
    },
    logoutViewstyle: {
        flexDirection: "row",
        marginLeft: 36,
        marginTop: 51
    },
})

export default SideMenuScreen