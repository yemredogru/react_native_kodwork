import { useState,useEffect } from "react";
import axios from 'axios';
function useFetch(){
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const fetchData=async()=>{
        try{
           const {data:responseData}= await axios.get("https://www.themuse.com/api/public/jobs?page=1");
           setData(responseData)
        setLoading(false);
        }
        catch(e){
            setLoading(false);
            setError(err.message);
        }
        
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return {error,loading,data};
}

export default useFetch;