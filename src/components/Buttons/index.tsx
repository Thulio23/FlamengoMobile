import { View, TouchableHighlight, Text, TouchableOpacity } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { styles } from "../../styles/GlobalStyle";
interface ButtonsProps {
    page: number
    altera: Dispatch<SetStateAction<number>>
}
export function Buttons({ page,altera }: ButtonsProps) {
    return (
        <View style={styles.buttons}>

{/* se tiver na page certa, a cor muda */}
            <TouchableHighlight style={[styles.singleButton, page == 1 ? styles.actived : null ]} onPress={() => {
                altera(1)
            }}> 
            {/* pedem que esse touchable tenha um filho */}
            <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.singleButton, page == 2 ? styles.actived : null ]} onPress={() => {
                altera(2)
            }}>
                <Text></Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.singleButton, page == 3 ? styles.actived : null ]} onPress={() => {
                altera(3)
            }}>
                <Text></Text>
            </TouchableHighlight>
        </View>
    )
}
