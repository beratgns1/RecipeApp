import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from "react-native";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

import LinearGradient from "react-native-linear-gradient";

import MailIcon from "../assets/icons/icons2";
import PassIcon from "../assets/icons/icons3";
import LogoIcon from "../assets/icons/icons4";

const MMKV = new MMKVLoader().initialize()

const LoginScreen = props => {

    const [users, setUsers] = useMMKVStorage('users', MMKV, [])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigateToHomeScreen = () => {
        users.forEach(element => {
            if (username === element.isim && password === element.sifre) {
                props.navigation.navigate("HomeScreen")
            }
        })
    }

    
    const navigateToRegisterScreen = () => {
        props.navigation.navigate("RegisterScreen");
    };

    return (
        <LinearGradient colors={["white", "black"]}>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <View style={styles.logoStyles}>
                        <LogoIcon  />
                        <Text style={styles.baslikTxt}>KHANA RECIPE</Text>
                        <Text style={styles.baslikTxt1}>Cook In Easy Way</Text>
                    </View>
                    <View style={styles.inputStyle}>
                        <Text style={styles.baslikTxt2}>Login</Text>
                        <View style={styles.nameIconStyles}>
                            <MailIcon />
                            <TextInput
                                onChangeText={setUsername}
                                value={username}
                                style={styles.txtInPutStyles}
                                placeholder="Email Adress"
                                placeholderTextColor={"white"} />
                        </View>
                        <View style={styles.nameIconStyles}>
                            <PassIcon />
                            <TextInput
                            onChangeText={setPassword}
                            value={password}
                                style={styles.txtInPutStyles}
                                placeholder="Password"
                                placeholderTextColor={"white"} />
                        </View>
                        <Text style={styles.passTxt}>
                            Forgot Password
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.registerBtn}
                    onPress={navigateToHomeScreen}>
                        
                        <Text style={styles.registerStyles}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.altBilgiStyles}>
                    <Text style={styles.altBilgiTxt}>Not Registered Yet</Text>
                    <TouchableOpacity
                    onPress={navigateToRegisterScreen}>
                        <Text style={styles.altBilgiTxt2}>Register Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: "space-between"
    },
    container2: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1
    },
    logoStyles: {
        alignItems:"center",
        marginBottom: 15,
    },
    baslikTxt: {
        textAlign: "center",
        fontSize: 37,
        color: "white"
    },
    baslikTxt1: {
        textAlign: "center",
        fontSize: 16,
        color: "white"
    },
    baslikTxt2: {
        textAlign: "center",
        fontSize: 32,
        color: "white",
        paddingBottom: 30,
    },
    nameIconStyles: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    inputStyle: {
        height: 290,
        width: 312,
    },
    txtInPutStyles: {
        marginLeft: 15,
        fontSize: 17
    },
    passTxt: {
        color: "#FF6B00",
        textAlign: "right",
        fontSize: 15
    },
    registerBtn: {
        height: 57,
        width: 344,
        borderWidth:1,
        borderColor:"white",
        borderRadius: 20,
        justifyContent: "center"
    },
    registerStyles: {
        textAlign: "center",
        fontSize: 25,
        color: "white"
    },
    altBilgiStyles: {
        flexDirection: "row",
        justifyContent:"center",
        
    },
    altBilgiTxt: {
        color: "white",
        fontSize: 17,
    },
    altBilgiTxt2: {
        color: "#FF6B00",
        fontSize: 17,
        marginLeft:8,
    }
})

export default LoginScreen