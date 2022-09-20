import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../components/JobsCard/JobsCard.js';
import { FlatList,View,Text,ActivityIndicator } from "react-native";


const Jobs=({navigation})=>{
    const {loading,data,error} = useFetch();
    const handleJobId=(item)=>{
        navigation.navigate('JobDetails',{item})
    }
    const renderJobs=({item})=>(
        <JobsCard job={item} onSelect={()=>handleJobId(item)} />
    );
    if(loading){
       return(
        <ActivityIndicator size="large" color="#0000ff" />
       )
    }
    return(
        <View>
            <FlatList 
            data={data.results}
            renderItem={renderJobs} />
        </View>
    )
}

export default Jobs;