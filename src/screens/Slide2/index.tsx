import React from "react"
import { Text, View, Image } from "react-native"
import { styles } from "../../styles/GlobalStyle"
export function Slide2() {
    const loginImg = require('../../assets/login.png')
    return (
        <View style={styles.page2positions}>
            <Text style={styles.pageTitle}>
                Uma vez Flamengo, sempre Flamengo. Flamengo sempre eu hei de ser. É o meu maior prazer vê-lo brilhar.


            </Text>
            <View style={styles.loginImageText}>
                <Image source={loginImg} style={styles.loginImage}></Image>
                <Text style={styles.loginText}>Login</Text>
            </View>
            <Text style={styles.pageTitle}>
                Seja na terra, seja no mar. Vencer, vencer, vencer. Uma vez Flamengo, Flamengo até morrer

            </Text>
        </View>

    )

}