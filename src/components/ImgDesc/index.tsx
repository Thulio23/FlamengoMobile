import React from "react"
import { Image, View, Text } from "react-native"
import { styles } from "../../styles/GlobalStyle"
interface ImgDesc{
    url: any
    desc:string
}
export function ImgDesc({url, desc}:ImgDesc){
    return(
    <View style={styles.card}>
        <Image source={url} style={styles.imagesInicio}/>
        <Text style={styles.textoInicio}>{desc}</Text>
    </View>
    )
}