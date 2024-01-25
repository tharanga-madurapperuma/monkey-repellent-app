import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import {styles} from './contact.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

const hangingMonkey = require("../../../assets/MonkeyUI.png")

const About = () => {
    return (
      <ImageBackground 
              source={hangingMonkey}
              style={styles.image}
            >
        <View style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            marginVertical: 100,
          }}>
            
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => {Linking.openURL('https://wa.me/94764196675')}}
              >
                <FontAwesome5 name="whatsapp-square" size={50} color="#25d366" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => {Linking.openURL('https://web.facebook.com/Yondecstudios')}}
              >
                <Entypo name="facebook" size={50} color="#316FF6" />
            </TouchableOpacity>
            <TouchableOpacity   
              style={styles.iconContainer}
              onPress={() => {Linking.openURL('https://github.com/Yondec-studios')}}
              >
                <FontAwesome name="github-square" size={50} color="#2b3137" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => {Linking.openURL('https://www.linkedin.com/in/tharanga-sandun-189139240/')}}
              >
                <FontAwesome5 name="linkedin" size={50} color="#0077b5" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => {Linking.openURL('mailto:tharanga.sandun.kumara2000@gmail.com?subject=Problem With Device (Enter the Device Number Here)&body=Description')}}
              >
                <MaterialCommunityIcons name="gmail" size={53} color="#c71610" />
            </TouchableOpacity>
              
          </View>
      </ImageBackground>
        
    )
}

export default About;