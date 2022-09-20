import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        borderRadius:5,
        backgroundColor:'white',
        borderWidth:0.2,
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
    },
    company:{
        fontSize:16,
    },
    location:{
        alignSelf:"flex-start",
        paddingStart:10,
        paddingEnd:10,
        borderRadius:10,
        backgroundColor:'red',
        color:'white',
        fontSize:16,
    },
    level:{
        alignSelf:'flex-end',
        color:'red',
        fontSize:16,
    }


})