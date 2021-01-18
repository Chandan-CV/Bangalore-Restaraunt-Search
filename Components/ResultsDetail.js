import React from'react'
import {View,Image,Text,StyleSheet} from 'react-native'



const ResultsDetail = ({result})=>
{
    console.log(result)
    return(
        <View>
        <Image style={styles.image} source={{uri: (result.restaurant.thumb).length>0?result.restaurant.thumb:"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"}} />
        
        <Text style={styles.name}>{result.restaurant.name}</Text>
        <Text> {result.restaurant.user_rating.aggregate_rating} stars,  {result.restaurant.all_reviews_count} Reviews</Text>
        </View>
    ); 
}
const styles = StyleSheet.create({
    image:{
        height:120,
        width: 250,
        borderRadius:4,
    },
    name:
    {
            fontWeight:'bold',
            fontSize:14,
    }
})

export default ResultsDetail;