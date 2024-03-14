
import React from 'react'
import { FlatList, StyleSheet, Text, View} from 'react-native'
import { styles } from '../../styles/GlobalStyle';

const nomes = [
  { id: '0', text: 'Zico' },
  { id: '1', text: 'Gabigol' },
  { id: '2', text: 'Adriano Imperador' },
  { id: '3', text: 'Maestro Júnior' },
  { id: '4', text: 'Adílio' },
  { id: '5', text: 'Mozer' },
  { id: '6', text: 'Nunes' },
  { id: '7', text: 'Arrascaeta' },
  { id: '8', text: 'Petković' },
  { id: '9', text: 'Andrade' },
  { id: '10', text: 'Bruno Henrique' }
];



export function Slide3(){
return(
  <View>
    <Text style={styles.pageTitle}>Ídolos</Text>
<FlatList
      style={styles.flatList}
      data={nomes}
      renderItem={({ item }) => <Text style={styles.list}>&#x26BD; {item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
    
</View>
)
}