import React, { useState } from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'; 
import { Feather } from '@expo/vector-icons';

const SearchBar =({term, onTermChange,onTermSubmit})=>
{
  return(
      <View style={styles.background}>
      <Feather name="search" size={30} color="black" style={{alignSelf:'center'}} />     
      
      
      <TextInput 
      onEndEditing={onTermSubmit}
      style={styles.inputStyle}
      placeholder="search"
      value={term}
      onChangeText= {(newTerm)=>{onTermChange(newTerm)}}
      />  
      </View>

  );
}
const styles = StyleSheet.create({
background:{
    marginTop:10,
    backgroundColor:"lightgrey",
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginBottom:10
},
inputStyle:{
flex:1,
fontSize:20
},
iconStyle:{
fontSize: 35,
},
});

export default SearchBar;