
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/JobsCard/JobsCard";
export default function FavoriteJobs({navigation}){
    const jobs = useSelector(selection => selection.favorites)
    const dispatch = useDispatch()
    const deleteJob = job => {
        dispatch({type:'DELETE_JOB', payload:{id:job.id}})
    }
    const handleJobDetail = item => {
        navigation.navigate("JobDetails",{item})
    } 
    const renderFavoriteJobs = ({item}) => (
        <View>
            <JobCard job={item} onSelect={()=>handleJobDetail(item)}/>
            <TouchableOpacity  onPress={()=>deleteJob(item)}>
               
                <Text >Remove Job</Text>
            </TouchableOpacity>
        </View>
    )
    console.log(jobs,jobs.length)
    return(

        jobs.length==0 ? <Text>Favourites List is empty.</Text>
        :
        
        <FlatList
            data={jobs}
            renderItem={renderFavoriteJobs}
            
        />
        
    )
}