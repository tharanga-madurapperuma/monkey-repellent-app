import React from 'react';
import { View, Text} from 'react-native';
import {styles} from './contact.styles';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';

const hangingMonkey = require("../../../assets/MonkeyUI.png")

const About = () => {
    return (
        <View style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <ImageBackground 
              source={hangingMonkey}
              style={styles.image}
            >
            
            

            </ImageBackground>
          </View>
    )
}

export default About;