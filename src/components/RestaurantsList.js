import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RestaurantsList = ({ title, restaurantsByPrice }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurantsByPrice}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
      <Text>Results: {restaurantsByPrice.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RestaurantsList;
