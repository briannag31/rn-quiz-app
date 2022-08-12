import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";



const App = () =>{
return(
  
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  
)
}

export default App

const styles = StyleSheet.create({
container:{
  paddingTop: 40,
  paddingHorizontal: 16,
  backgroundColor: "#355070"
  
}

})