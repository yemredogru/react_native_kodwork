import React from "react";
import { View,Text,TouchableWithoutFeedback } from "react-native";
import styles from './JobsCard.style';

const JobsCard=({job,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.title}>{job.name}</Text>
                <Text style={styles.company}>{job.company.name}</Text>
                <Text style={styles.location}>{job.locations[0].name}</Text>
                <Text style={styles.level}>{job.levels[0].name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobsCard;