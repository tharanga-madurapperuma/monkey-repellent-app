import React from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from './home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';

const hangingMonkey = require("../../../assets/MonkeyUI.png")
 
const Home = () => {
  return (
    //<SafeAreaView style={{flex: 1, zIndex:2}}>
      <View style={{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      }}>
        <ImageBackground 
          source={hangingMonkey}
          style={styles.image}
        >
          <Text style={styles.headText}>Monkey Repellent</Text>
        <Text style={styles.headText}>Device</Text>

        <TouchableOpacity >
          <LinearGradient
            colors={["#48EBE2", "#42A26E"]}
            style={styles.turnOnBtn}
          >
              <Text style={styles.onText}>TURN ON</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity >
          <LinearGradient
            colors={["#48EBE2", "#42A26E"]}
            style={styles.turnOffBtn}
          >
              <Text style={styles.offText}>TURN OFF</Text>  
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{marginBottom: 25}}/>
        <View style={styles.versionText}>
          <Text>Version 1.0</Text>
        </View>
        </ImageBackground>

        
      </View>
    //</SafeAreaView>
    
  );
}

export default Home;