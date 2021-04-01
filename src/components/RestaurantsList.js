import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantsList = ({ title, restaurantsByPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurantsByPrice}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return <RestaurantDetail restaurant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default RestaurantsList;
