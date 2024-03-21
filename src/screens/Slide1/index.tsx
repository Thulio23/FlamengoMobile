import { Text, View, Image, TouchableHighlight } from "react-native";
import { ImgDesc } from "../../components/ImgDesc";
import { colors } from "../../styles/colors";
import { styles } from "../../styles/GlobalStyle";
interface troca{
    altera: React.Dispatch<React.SetStateAction<number>>

}
export function Slide1({altera}:troca) {
    const Images = [
        {
            url: require('../../assets/1.png'),
            desc: "8x Brasileiro"
        },
        {
            url: require('../../assets/2.png'),
            desc: "4x Copa do Brasil"
        },
        {
            url: require('../../assets/3.png'),
            desc: "3x Libertadores"
        },
        {
            url: require('../../assets/4.png'),
            desc: "1x Mundial"
        }

    ]
    return (
        <View>
            
             <Text style={styles.pageTitle}>Bem Vindo ao Aplicativo do  </Text>
             <TouchableHighlight onPress={() => {
                altera(2)
            }}>
                <Text style={styles.pageTitle}>Flamengo</Text>
            </TouchableHighlight>
             <View>
            {Images.map(json => (
                <ImgDesc url={json.url} desc={json.desc} key={json.desc}/>         
            ))}
            </View>

        </View>
    )

}
