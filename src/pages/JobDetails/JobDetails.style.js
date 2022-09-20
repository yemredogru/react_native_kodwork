import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
    },
    inner_text:{
        flexDirection:'row',
        alignItems:'center'
    },
    red_text:{
        color:'red',
        fontSize:16,
    },
    text:{
        fontSize:16,
        
    },
    details:{
        marginTop:20,
        alignItems:'center',
    },
    scroll_container:{
        borderColor:'gray',
        borderRadius:5,
        borderWidth:1,
        paddingLeft:5,
        paddingRight:5,

    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
      inner_buttons:{
        flexDirection:'row',
        justifyContent:'space-around',
      },
      touch_button:{
        flexDirection:'row',
        backgroundColor:'red',
        margin:10,
        paddingHorizontal:10,
        borderRadius:10,
        paddingVertical:5,
        alignItems:'center'
      },
      bottom_button:{
        fontSize:20,
        color:'white',
      }
});