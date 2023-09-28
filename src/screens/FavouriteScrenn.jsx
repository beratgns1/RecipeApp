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

const FavouriteScreen = props => {

    const navigateToSideMenuScreen = () => {
        props.navigation.navigate("SideMenuScreen");
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
            like: true,
            image:'cake'
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
            like: true,
            image:'cake'
        },
        {
            name: "Chocolate Cake",
            category: "Dinner",
            time: "10:03",
            point: "4.5/5",
            like: true,
            image:'chocake'
        },
        

    ])

    return (
        <View style={styles.container}>
            <View style={styles.todaysRecipestyles}>
                <Text style={styles.todaysRecipestylesTxt}>
                Favourite</Text>
                <TouchableOpacity
                onPress={navigateToSideMenuScreen}
                >
                    <BackIcon style={styles.todaysRecipestylesBtn}/>
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
        marginTop: 76
    },
    todaysRecipestylesTxt: {
        color: "white",
        fontSize: 24,
    },
    todaysRecipestylesBtn: {
        color: "#FF6B00",
        marginRight: 8,
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
        marginTop: 43,
        
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

export default FavouriteScreen