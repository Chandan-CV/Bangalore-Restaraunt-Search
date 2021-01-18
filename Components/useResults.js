import {useEffect, useState} from 'react';
import zomato from '../api/zomato';

export default ()=>
{
    const[results, setResults] = useState([]);
    const[errormsg, setErrorMsg]= useState("");

    const searchApi = async (searchTerm)=>
    {
        try{
                const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
                setResults(response.data.restaurants);
                //console.log(results)
        }
        catch(err){
                console.log(err);
                setErrorMsg(err);
        }
    }
    useEffect(()=>{
        searchApi('visnu ')
    },[])
return [searchApi,results,errormsg];

}