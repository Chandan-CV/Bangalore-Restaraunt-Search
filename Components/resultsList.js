import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(val) => val.restaurant.id}
        renderItem={({ item }) => {
          return (
            <View style={{ marginHorizontal: 10 }}>
              <ResultsDetail result={item} />
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 15,
  },
});
export default ResultsList;
