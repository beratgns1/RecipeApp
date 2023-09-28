import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import AramaIcon from "../assets/icons/icons7";
import FiltreIcon from "../assets/icons/icons8";
import BackIcon from "../assets/icons/icons17";
import HeartIcon from "../assets/icons/icons11";
import EmptyHeart from "../assets/icons/icons12";
import TimeIcon from "../assets/icons/icons13";

const getImageResources = (imageName) => {
    const staticImage = {
        'waffle': require('../assets/images/waffle.png'),
        'burger': require('../assets/images/burger.png'),
        'chocake': require('../assets/images/chocake.png'),
        'cake': require('../assets/images/cake.png'),
    }

    if (staticImage[imageName]) {
        return staticImage[imageName]
    }
    return { uri: imageName }
}

const RecommendedSeeAllScreen = props => {

    const navigateToBackMenuScreen = () => {
        props.navigation.navigate("HomeScreen");
    };

    /* const [recipe2, setRecipe2] = useState([
        {
            name2: "Chicken Burger",
            category2: "Dinner",
            time2: "20:03",
            point2: "4.5/5",
            like2: false,
            image2:'burger'
        },
    ]) */

    const [recipe, setRecipe] = useState([
        {
            name: "Toast with Berries",
            category: "Breakfast",
            time: "10:03",
            point: "4.5/5",
            like: true,
            image: 'waffle'
        },
        {
            name: "Chicken Burger",
            category: "Dinner",
            time: "20:03",
            point: "4.5/5",
            like: false,
            image:'burger'
        },
        {
            name: "Toast with Berries",
            category: "Breakfast",
            time: "10:03",
            point: "4.5/5",
            like: true,
            image: 'waffle'
        },
        {
            name: "Chicken Burger",
            category: "Dinner",
            time: "20:03",
            point: "4.5/5",
            like: false,
            image:'burger'
        },
        {
            name: "Toast with Berries",
            category: "Breakfast",
            time: "10:03",
            point: "4.5/5",
            like: true,
            image: 'waffle'
        },
        {
            name: "Chicken Burger",
            category: "Dinner",
            time: "20:03",
            point: "4.5/5",
            like: false,
            image:'burger'
        },

    ])

    return (
        <View style={styles.container}>
            <View style={styles.todaysRecipestyles}>
                <Text style={styles.todaysRecipestylesTxt}>
                    Recommended </Text>
                <TouchableOpacity
                    onPress={navigateToBackMenuScreen}
                >
                    <BackIcon style={styles.todaysRecipestylesBtn} />
                </TouchableOpacity>
            </View>
            <View style={styles.TxtinpuIconTxt}>
                <View style={styles.TxtinpuIconTxt2}>
                    <TextInput style={styles.txtInPutIcon}
                        placeholderTextColor={"white"}
                        placeholder="Search Recipe" />
                    <AramaIcon style={styles.aramaStyle} />
                </View>
                <View style={styles.filtreStyle}>
                    <FiltreIcon />
                </View>
            </View> 
                    <View style={styles.flatContainer}>
                        <FlatList
                            numColumns={2}
                            data={recipe}
                            renderItem={element => {
                                return (
                                    <View style={styles.recipeFlatStyles}>
                                        <View style={styles.heartImageStyle}>
                                            {
                                                element.item.like == true ?
                                                    <HeartIcon /> :
                                                    <EmptyHeart />
                                            }
                                            <Image style={styles.Image} source={getImageResources(element.item.image)} />
                                        </View>
                                        <View style={styles.catTimeStyle}>
                                            <Text
                                                style={styles.catagoryStyle}
                                            >{element.item.category}</Text>
                                            <Text
                                                style={styles.nameStyle}
                                            >{element.item.name}</Text>
                                            <View style={styles.timeIconStyle}>
                                                <TimeIcon />
                                                <Text
                                                    style={styles.timeStyle}
                                                >{element.item.time}</Text>
                                            </View>
                                            <Text
                                                style={styles.pointStyle}
                                            >{element.item.point}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
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
    TxtinpuIconTxt: {
        flexDirection: "row",
        width: 340,
        alignSelf: "center",
        marginTop: 20
    },
    TxtinpuIconTxt2: {
        flexDirection: "row",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "white",
        width: 254,
        alignItems: "center",
        justifyContent: "space-between",
    },
    txtInPutIcon: {
        height: 35,
    },
    aramaStyle: {
        marginRight: 5
    },
    filtreStyle: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "white",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 50
    },
    todaysRecipestyles: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginEnd: 20,
        marginStart: 25,
        marginTop: 48
    },
    todaysRecipestylesTxt: {
        color: "white",
        fontSize: 24,
    },
    todaysRecipestylesBtn: {
        color: "#FF6B00",
        marginRight: 8,
    },
    flatContainer: {
        flexDirection: "row",
        marginTop:36,
        marginLeft:30,
    },
    recipeFlatStyles: {

    },
    recipeFlatStyles: {
        width: 168,
        backgroundColor: "#373737",
        borderRadius: 20,
        marginRight: 10,
        marginTop:10,
        justifyContent: "space-evenly",
        paddingLeft: 10,
        paddingTop: 10,
    },
    heartImageStyle: {
        height: 110,
        flexDirection:"row"
    },
    catTimeStyle: {
        height: 110,
        justifyContent: "space-evenly"
    },
    catagoryStyle: {
        color: "#2958FF",
        fontSize: 10,
    },
    nameStyle: {
        color: "white",
        fontSize: 10,
    },
    nameStyle2:{
        color: "white",
        fontSize: 18,
    },
    timeIconStyle: {
        flexDirection: "row",

    },
    timeStyle: {
        color: "#FF6B00",
        fontSize: 10,
        marginLeft: 8
    },
    pointStyle: {
        color: "white",
        fontSize: 10,
    },
})

export default RecommendedSeeAllScreen