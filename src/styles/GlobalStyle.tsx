import {StyleSheet} from 'react-native'
import { colors } from './colors'
export const styles = StyleSheet.create({
    //estilo de todos
    back:{
        flex:1,
         
    },
    backcor:{
        backgroundColor: '#4d4242c8',
        paddingTop:50,
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
    },
    imagesInicio:{
        maxWidth:100,
        maxHeight:100
    },textoInicio:{
        fontSize:25,
        color:'white'
    },
    pageTitle:{
        fontSize:30,
        color: '#f87b7b',
        textAlign:'center',
        textShadowColor:'#000',
        textShadowOffset:{height:3,width:2},
        textShadowRadius:3,
        paddingHorizontal:5
    },
    card:{
        flexWrap:'nowrap',
        flexDirection:'row',
        width:350,
        backgroundColor: colors.primary,
        marginVertical:10,
        padding:5,
        borderRadius:10,
        alignItems:'center',
        

    },
    buttons:{
        position:'absolute',
        bottom:20,
        width:400,
        height:30,
        flexWrap:'nowrap',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    singleButton:{
        backgroundColor:'#ccc',

        borderRadius:15,
        width:30,
        height:30
    },
    actived:{
        backgroundColor:colors.primary
    },
    flatList:{

    },
    list:{
        width:400,
        fontSize:20,
        textAlign:'left',
        backgroundColor:'#c52513dd',
        marginVertical: 1,
        paddingVertical:10,
        color: 'white',
    },
    page2positions:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        flexWrap:'wrap'
    },
    loginImageText:{
        flexDirection:'column',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'


    }, 
    loginImage:{
        maxWidth:150,
        height:150
    },
    loginText:{
        fontSize:30,
        color: 'white',
    }


})