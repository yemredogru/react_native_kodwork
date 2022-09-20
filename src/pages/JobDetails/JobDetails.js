import { Text,View,ScrollView,Dimensions,TouchableOpacity, Alert } from "react-native";
import RenderHtml from 'react-native-render-html'
import styles from './JobDetails.style';
import { useDispatch } from "react-redux";

const JobDetails=({route})=>{
    const {item} = route.params
    console.log(Object.keys(item))
    const source = {
        html: item.contents
    }
    const dispatch = useDispatch();
    const { width } = {
        width: Dimensions.get('screen').width
    }
    const onPress=()=>{
        Alert.alert("Success")
    }
    const addFav=fav=>{
        dispatch({type:'ADD_FAVOURITE',payload:{fav}})
    }
    return(
        <View style={styles.container}>
            <View style={styles.inner_text}>
              <Text style={styles.red_text}>Locations:</Text>
              <Text style={styles.text}> {item.locations[0].name}</Text>
            </View>
            <View style={styles.inner_text}>
              <Text style={styles.red_text}>Job Level:</Text>
              <Text style={styles.text}> {item.levels[0].name}</Text>
            </View>
            <View style={styles.details}> 
               <Text style={styles.text}>Job Detail</Text>
            </View>
            <ScrollView style={styles.scroll_container}>
                <RenderHtml style={styles.html}
                    baseStyle={{ color: 'black' }}
                    source={source}
                    contentWidth={width}
                 
                />
            </ScrollView>
            <View style={styles.inner_buttons}>
            <TouchableOpacity
        style={styles.touch_button}
        onPress={onPress}
      >
        <Text style={styles.bottom_button}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touch_button}
        onPress={()=>addFav(item)}
        
      >
        <Text style={styles.bottom_button}>Favorite Job</Text>
      </TouchableOpacity>
            </View>
        </View>
    )
}

export default JobDetails;