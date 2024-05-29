import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ 
            headerShown: true, 
            title: 'Rick and Morty Episodes' 
          }}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}
          options={{
            headerShown: true,
            title: 'Episode Details'
          }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
