import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Pressable } from 'react-native';
import AsyncStorage from 'react-native';
let STORAGE_KEY = '@user_input';

const HighScore = ({navigation}) => {
    _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            '@MySuperStore:key',
            'I like to save it.'
          );
        } catch (error) {
          // Error saving data
        }
      };
      _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('TASKS');
          if (value !== null) {
            // We have data!!
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };
    const [input, setInput] = useState('');
    const saveData = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, age)
          alert('Data successfully saved')
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      }
      const readData = async () => {
        try {
          const value = await AsyncStorage.getItem(STORAGE_KEY);
      
          if (value !== null) {
            setInput(value);
          }
        } catch (e) {
          alert('Failed to fetch the input from storage');
        }
      };

      useEffect(() => {
        readData();
      }, []);

      const clearStorage = async () => {
        try {
          await AsyncStorage.clear();
          alert('Storage successfully cleared!');
        } catch (e) {
          alert('Failed to clear the async storage.');
        }
      };

      const onChangeText = value => setInput(value);

const onSubmitEditing = () => {
  if (!input) return;

  saveData(input);
  setInput('');
};


    return(
    <View style={styles.container}>
        <ImageBackground source={{ uri: "https://i.imgur.com/brt08U5.png" }} style={styles.image}
        resizeMode="cover">
            <View style={styles.header}>
        <Text style={styles.title}>AsyncStorage React Native</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.label}>Enter your input here:</Text>
        <TextInput
          style={styles.inputField}
          value={input}
          placeholder="Enter"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.text}>Your input is {input}</Text>
        <Pressable onPress={clearStorage} style={styles.button}>
          <Text style={styles.buttonText}>Clear Storage</Text>
        </Pressable>
      </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.start}>
            <Text style={styles.startText}>Home!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.start}>
            <Text style={styles.startText}>Play!</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
)};

export default HighScore;

const styles = StyleSheet.create({
    container:{
        height: "100%",
        paddingTop: 50,
        // paddingHorizontal: 40,
        backgroundColor: "#355070"
    },
    banner:{
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        justifyContent: 'center',
        alignItems: "center",
        width: 400,
		height: 800,
      },
      start:{
        width: "100%",
        backgroundColor: "#E56B6F",
        padding: 16,
        marginBottom: 100,
        borderRadius: 16,
        alignItems: 'center',
        width: "75%",
      },
      startText:{
        fontSize: 24,
        fontWeight: "600",
        color: "white"
      },

        container: {
          flex: 1,
        },
        header: {
          width: '100%',
          backgroundColor: '#dcdcdc',
          paddingTop: 48,
          paddingBottom: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          alignItems: 'center',
        },
        title: {
          fontSize: 22,
          color: '#333',
          fontWeight: 'bold',
        },
        panel: {
          paddingTop: 10,
          paddingHorizontal: 10,
        },
        label: {
          fontSize: 20,
        },
        text: {
          fontSize: 24,
          paddingTop: 10,
        },
        inputField: {
          backgroundColor: '#fff',
          height: 44,
          borderWidth: 1,
          borderColor: '#333',
          width: '100%',
          padding: 10,
          marginTop: 12,
        },
        button: {
          margin: 10,
          padding: 10,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        },
        buttonText: {
          fontSize: 18,
          color: '#444',
        },
       
      
})

