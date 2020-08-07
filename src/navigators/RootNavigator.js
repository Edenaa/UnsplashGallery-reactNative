import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ImageListScreen from '../screens/ImageListScreen';
import ImageInfoScreen from '../screens/ImageInfoScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Unsplash Gallery'}>
      <Stack.Screen name={'Unsplash Gallery'} component={ImageListScreen} />
      <Stack.Screen name={'Full Image'} component={ImageInfoScreen} />
    </Stack.Navigator>
  );
};
