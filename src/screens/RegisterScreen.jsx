import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import NameIcon from "../assets/icons/icons";
import MailIcon from "../assets/icons/icons2";
import PassIcon from "../assets/icons/icons3";
import EyeIcon from "../assets/icons/icons9";
import CloseEyeIcon from "../assets/icons/icons10";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().initialize()

const RegisterScreen = props => {

    const [users, setUsers] = useMMKVStorage('users', MMKV, [])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const Register = () => {
        setUsers([...users, {isim:username , sifre:password}])
    }

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const navigateToLoginScreen = () => {
        props.navigation.navigate("LoginScreen");
    };

    return (

        <View style={styles.container}>
            <View style={styles.container2}>
                <View >
                    <Text style={styles.baslikTxt}>KHANA RECIPE</Text>
                    <Text style={styles.baslikTxt1}>Cook In Easy Way</Text>
                </View>
                <View style={styles.inputStyle}>
                    <Text style={styles.baslikTxt2}>Register</Text>
                    <View style={styles.nameIconStyles}>
                        <NameIcon />
                        <TextInput
                            onChangeText={setUsername}
                            value={username}
                            style={styles.txtInPutStyles}
                            placeholder="Full Name"
                            placeholderTextColor={"white"} />
                    </View>
                    <View style={styles.nameIconStyles}>
                        <MailIcon />
                        <TextInput
                            style={styles.txtInPutStyles}
                            placeholder="Email Adress"
                            placeholderTextColor={"white"} />
                    </View>
                    <View style={styles.nameIconStyles}>
                        <PassIcon />
                        <TextInput
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry = {passwordVisible}
                            style={styles.txtInPutStyles}
                            placeholder="Password"
                            placeholderTextColor={"white"} />
                        <TouchableOpacity style={styles.EyeIconStyle}
                        onPress={() => {
                            setPasswordVisible(!passwordVisible)
                        }}>
                            {
                                passwordVisible == false ?
                                    <EyeIcon /> :
                                    <CloseEyeIcon />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.nameIconStyles}>
                        <PassIcon />
                        <TextInput
                            secureTextEntry = {passwordVisible2}
                            style={styles.txtInPutStyles}
                            placeholder="Confirm Password"
                            placeholderTextColor={"white"} />
                        <TouchableOpacity style={styles.EyeIconStyle}
                        onPress={() => {
                            setPasswordVisible2(!passwordVisible2)
                        }}>
                            {
                                passwordVisible2 == false ?
                                    <EyeIcon /> :
                                    <CloseEyeIcon />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.registerBtn}
                onPress={Register}
                >
                    <Text style={styles.registerStyles}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.altBilgiStyles}>
                <Text style={styles.altBilgiTxt}>Already Registered</Text>
                <TouchableOpacity
                    onPress={navigateToLoginScreen}>
                    <Text style={styles.altBilgiTxt2}>Login Now</Text>
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
        justifyContent: "space-between"
    },
    container2: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flex: 1,
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
        paddingVertical: 4
    },
    nameIconStyles: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        paddingVertical: 4
    },
    inputStyle: {
        height: 290,
        width: 312,

    },
    txtInPutStyles: {
        paddingLeft: 15,
        fontSize: 17,
        textAlign: "left",
        flex: 1,
        color:"white"
    },
    registerBtn: {
        height: 57,
        width: 344,
        backgroundColor: "#FF6B00",
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
        justifyContent: "center",
        textAlign: "center",

    },
    altBilgiTxt: {
        color: "white",
        fontSize: 17,
    },
    altBilgiTxt2: {
        color: "#FF6B00",
        fontSize: 17,
        marginLeft: 8
    }
})

export default RegisterScreen