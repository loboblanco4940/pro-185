import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./screens/Home";
import Main from "./screens/Main";

const Stack = createStackNavigator();

export default class App extends Component() {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            hearderShown:false
          }}
        >
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="Main" component={Main}/> 
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}