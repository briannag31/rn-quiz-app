import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Title from '../components/title';


const Choice = ({navigation}) => (
    <View style={styles.container}>
        <ImageBackground source={{ uri: "https://i.imgur.com/brt08U5.png" }} style={styles.image}
        resizeMode="cover">
            
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.start}>
            <Text style={styles.startText}>Play Trivia Questions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Highscore")} style={styles.start}>
            <Text style={styles.startText}>See highscore</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Create")} style={styles.start}>
            <Text style={styles.startText}>Create a Quiz Question</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
);

export default Choice;

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
      
      
})

