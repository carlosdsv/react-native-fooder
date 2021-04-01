import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <View>
      <Text>Restaurant Show</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default RestaurantShowScreen;
