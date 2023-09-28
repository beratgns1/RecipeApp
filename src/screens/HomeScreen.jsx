import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ArtiIcon from "../assets/icons/icons5";
import ListeleIcon from "../assets/icons/icons6";
import AramaIcon from "../assets/icons/icons7";
import FiltreIcon from "../assets/icons/icons8";
import HeartIcon from "../assets/icons/icons11";
import EmptyHeart from "../assets/icons/icons12";
import TimeIcon from "../assets/icons/icons13";



const getImageResources = (imageName) => {
    const staticImage = {
    'waffle' : require('../assets/images/waffle.png'),
    'burger' : require('../assets/images/burger.png'),
    'chocake' : require('../assets/images/chocake.png'),
    'cake' : require('../assets/images/cake.png'),
    }

    if (staticImage[imageName]) {
        return staticImage[imageName]
    }
        return {uri: imageName}
}


const HomeScreen = props => {

    const navigateToSideMenuScreen = () => {
        props.navigation.navigate("SideMenuScreen");
    };
    const navigateAllSeeScreen = () => {
        props.navigation.navigate("SeeAllScreen");
    };
    const navigateRecommendedSeeAllScreen = () => {
        props.navigation.navigate("RecommendedSeeAllScreen");
    };

    const [recipe, setRecipe] = useState([
        {
            name: "Toast with Berries",
            category: "Breakfast",
            time: "10:03",
            point: "4.5/5",
            like: true,
            image:'waffle'
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
            name: "Chocolate Cake",
            category: "Dinner",
            time: "10:03",
            point: "4.5/5",
            like: true,
            image:'chocake'
        },
        {
            name: "Cup Cake",
            category: "Dinner",
            time: "05:00",
            point: "4.5/5",
            like: false,
            image:'cake'
        },
        {
            name: "Chocolate Cake",
            category: "Dinner",
            time: "10:03",
            point: "4.5/5",
            like: false,
            image:'chocake'
        },
    ]
    )
    return (
        <View style={styles.container}>
            <View style={styles.ustIcon}>
                <ArtiIcon />
                <TouchableOpacity
                onPress={navigateToSideMenuScreen}
                >
                <ListeleIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.wdTxtSyle}>
                <Text style={styles.wdTxt1}>Welcome</Text>
                <Text style={styles.wdTxt2}>Denny</Text>
            </View>
            <Text style={styles.ustTxt}>What would you like to cook today?</Text>
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
            <View style={styles.todaysRecipestyles}>
                <Text style={styles.todaysRecipestylesTxt}>Today’s Fresh Recipe</Text>
                <TouchableOpacity
                onPress={navigateAllSeeScreen}
                >
                    <Text style={styles.todaysRecipestylesBtn}>See All</Text>
                </TouchableOpacity>
            </View>
            <View >
                <FlatList
                    horizontal
                    data={recipe}
                    renderItem={element => {
                        return (
                            <View style={styles.recipeFlatStyles}>
                                <View style={styles.heartImageStyle}>
                                    <TouchableOpacity
                                    onPress={() => {
                                        setRecipe([
                                            ...recipe.slice(0, element.index),
                                            {
                                                like: !element.item.like,
                                                image: element.item.image,
                                                category: element.item.category,
                                                name:element.item.name,
                                                time:element.item.time,
                                                rating:element.item.rating,
                                            },
                                            ...recipe.slice(element.index + 1)
                                        ])
                                    }}
                                    >
                                        {element.item.like ? <HeartIcon/> : <EmptyHeart/>}
                                    </TouchableOpacity>
                                    <Image style={styles.Image} source={getImageResources(element.item.image)}/>
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
            <View style={styles.recommended}>
                <Text style={styles.recommendedTxt}>Recommended</Text>
                <TouchableOpacity
                onPress={navigateRecommendedSeeAllScreen}
                >
                    <Text style={styles.recommendedBtn}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.recommendedFlatStyle}
                data={recipe}
                renderItem={element => {
                    return (
                        <View style={styles.recommendedContainer}>
                            <Image style={styles.Image2} source={getImageResources(element.item.image)}/>
                            <View style={styles.namePointStyle}>
                                <Text
                                style={styles.nameStyle2}
                                >{element.item.name}</Text>
                                <Text
                                style={styles.pointStyle}
                                >{element.item.point}</Text>
                            </View>
                            <View style={styles.recommendedHeart}>
                                {
                                    element.item.like == true ?
                                        <HeartIcon /> :
                                        <EmptyHeart />
                                }
                                <View style={styles.timeIconRow}>
                                    <TimeIcon />
                                    <Text style={styles.timeStyle2}>{element.item.time}</Text>
                                </View>
                            </View>
                        </View>

                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
        width: "100%",


    },
    ustIcon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        marginVertical: 25,

    },
    wdTxtSyle: {
        flexDirection: "row",
        marginLeft: 25,
        marginTop: 10
    },
    wdTxt1: {
        fontSize: 23,
        color: "white",

    },
    wdTxt2: {
        fontSize: 23,
        color: "#FF6B00",
        marginLeft: 10
    },
    ustTxt: {
        fontSize: 34,
        color: "#FF6B00",
        marginHorizontal: 25,
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
        marginTop: 10
    },
    todaysRecipestylesTxt: {
        color: "white",
        fontSize: 18,

    },
    todaysRecipestylesBtn: {
        color: "#FF6B00",
        fontSize: 18,
    },


    recommended: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginEnd: 20,
        marginStart: 25,
        marginTop: 10
    },
    recommendedTxt: {
        color: "white",
        fontSize: 18,
    },
    recommendedBtn: {
        color: "#FF6B00",
        fontSize: 18,
    },
    recipeFlatStyles: {
        width: 168,
        backgroundColor: "#373737",
        borderRadius: 20,
        marginRight: 8,
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
    recommendedContainer: {
        flexDirection: "row",
        height: 64,
        width: "100%",
        backgroundColor: "#373737",
        borderRadius: 20,
        marginTop: 8,
        justifyContent:"space-around"
    },
    recommendedFlatStyle: {
        paddingHorizontal: 16,
        
    },
    Image:{
        height:96,
        width:96,
        marginLeft:32
    },
    Image2:{
        height:54,
        width:66,
        marginTop:8
    },
    timeIconRow:{
        flexDirection:"row",
        
    },
    timeStyle2:{
        color: "#FF6B00",
        fontSize: 10,
        marginLeft: 8
    },
    recommendedHeart:{
        alignItems:"flex-end",
        justifyContent:"space-around",
        marginLeft:10,
        marginTop:5
    },
    namePointStyle:{
        justifyContent:"center"
    }
})
export default HomeScreen