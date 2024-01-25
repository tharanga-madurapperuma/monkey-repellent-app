import React from 'react';
import { View, Text} from 'react-native';
import {styles} from './about.styles';
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
                <LinearGradient
                    colors={["#48EBE2", 'transparent']}
                    style={styles.turnOnBtn}
                >
                    <View style={styles.aboutText}>

                        <View style={styles.titleText}>
                            <Text style={styles.titleText_topic}>Creative Design Project</Text>
                            <Text>BECS 22811</Text>
                        </View>

                        <View style={styles.memberText}>
                            <Text style={styles.memberTitle}>Group Members</Text>
                            <Text style={styles.memberNames}>THARANGA Madurapperuma</Text>
                            <Text style={styles.memberNames}>KASUN Buddhika</Text>
                            <Text style={styles.memberNames}>CHAMITH Dilshan</Text>
                            <Text style={styles.memberNames}>SANDUN Thilakarathna</Text>
                            <Text style={styles.memberNames}>THAMOD Rashmitha</Text>
                        </View>

                    </View>
                </LinearGradient>

            </ImageBackground>
          </View>
    )
}

export default About;