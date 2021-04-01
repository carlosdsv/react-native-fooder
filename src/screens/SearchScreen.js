import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestautantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    // price === '$' || '$$$' || '$$$'
    const res = restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
    return res;
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
      <RestautantsList
        restaurantsByPrice={filterRestaurantsByPrice('€')}
        title="Cost Effective"
      />
      <RestautantsList
        restaurantsByPrice={filterRestaurantsByPrice('€€')}
        title="Bit Pricier"
      />
      <RestautantsList
        restaurantsByPrice={filterRestaurantsByPrice('€€€')}
        title="Big Spender"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
