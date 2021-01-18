import React, { useState,useEffect} from "react";
import { View, Text,ScrollView, Button, StyleSheet, Keyboard } from "react-native";

import zomato from "../api/zomato";
import SearchBar from "../Components/SearchBar";
import useResults from "../Components/useResults";
import ResultsList from "../Components/resultsList"
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  
  const [searchApi,results,errorMsg] = useResults();
  

  const filterByPrice=(price)=>
  {
      //price == 1 or 2 or 3 or 4 
    return results.filter(result=>{
      return result.restaurant.price_range===price;
    })
  };
    
  return (
    <View style={{flex:1, marginVertical:2}}>
    <SearchBar 
    term={term} 
    onTermChange={setTerm} 
    onTermSubmit={()=>{searchApi(term)}}
    />
    
    <ScrollView>
     
      <ResultsList results= {filterByPrice(1)}  title = "Cost effective"/>
      <ResultsList results= {filterByPrice(2)} title= "Bit pricier"/> 
      <ResultsList results= {filterByPrice(3)} title="Big splender"/>
      <ResultsList results= {filterByPrice(4)} title = "Vijay Mallya"/> 
  </ScrollView>
  </View>
  );

  
};
const styles= StyleSheet.create({
  
})
export default SearchScreen;
