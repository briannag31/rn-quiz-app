// import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Results from '../screens/results';
import HighScore from "../screens/highscore";
import SignUp from "../screens/signup";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false }} />
      <Stack.Screen name="Highscore" component={HighScore} options={{headerShown: false }}  />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false }}  />
      <Stack.Screen name="Results" component={Results} options={{headerShown: false }}  />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false }}  />

    </Stack.Navigator>
  );
}

export default MyStack