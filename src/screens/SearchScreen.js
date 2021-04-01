import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestautantsList from '../components/RestaurantsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (priceDolar, priceEuro) => {
    // price === '$' || '$$$' || '$$$'
    const res = restaurants.filter((restaurant) => {
      return restaurant.price === priceDolar || restaurant.price === priceEuro;
    });
    return res;
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestautantsList
          restaurantsByPrice={filterRestaurantsByPrice('$', '€')}
          title="Cost Effective"
          navigation={navigation}
        />
        <RestautantsList
          restaurantsByPrice={filterRestaurantsByPrice('$$', '€€')}
          title="Bit Pricier"
          navigation={navigation}
        />
        <RestautantsList
          restaurantsByPrice={filterRestaurantsByPrice('$$$', '€€€')}
          title="Big Spender"
          navigation={navigation}
        />
        <RestautantsList
          restaurantsByPrice={filterRestaurantsByPrice(undefined)}
          title="Undefined 0_o"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
