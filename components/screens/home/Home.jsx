import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from './home.styles';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { FIREBASE_APP } from '../../../firebaseConfig';
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import Slider from '@react-native-community/slider';

const hangingMonkey = require("../../../assets/MonkeyUI.png")
 
const Home = () => {

  const FIREBASE_DB = getFirestore(FIREBASE_APP);
  const [deviceState, setDeviceState] = useState(false);
  const DEVICE_STATE = doc(FIREBASE_DB, "users", "7wDpVqY1i41GwpCkfp2O");

  const [range, setRange] = useState("0");
  const [valueChange, setValueChange] = useState(0);
  const [sliderDisabled, setSliderDisabled] = useState(false);
  const [btnColor1On, setBtnColor1On] = useState("#48EBE2");
  const [btnColor2On, setBtnColor2On] = useState("#42A26E");
  const [btnColor1Off, setBtnColor1Off] = useState("#48EBE2");
  const [btnColor2Off, setBtnColor2Off] = useState("#42A26E");


  useEffect(() => {
    async function update(){
      await updateDoc(DEVICE_STATE, {
        LED_STATUS: deviceState,
      })
    };

    update();
  },[deviceState]);
  
  useEffect(() => {
    async function stepperUpdate(){
      await updateDoc(DEVICE_STATE, {
        STEPPER_ANGLE: range,
      })
    };

    stepperUpdate();
  },[range]);

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
          <Text style={styles.headText}>Monkey Repellent</Text>
        <Text style={styles.headText}>Device</Text>

        <TouchableOpacity 
          onPress={() => {
            setDeviceState(true);
            setSliderDisabled(false);
            setBtnColor1On("#085F3A");
            setBtnColor2On("#085F3A");
            setBtnColor1Off("#48EBE2");
            setBtnColor2Off("#42A26E");
          }}
        >
          <LinearGradient
            colors={[btnColor1On, btnColor2On]}
            style={styles.turnOnBtn}
          >
              <Text style={styles.onText}>TURN ON</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => {
          setDeviceState(false);
          setSliderDisabled(true);
          setBtnColor1Off("#085F3A");
          setBtnColor2Off("#085F3A");
          setBtnColor1On("#48EBE2");
          setBtnColor2On("#42A26E");
        }}
        >
          <LinearGradient
            colors={[btnColor1Off, btnColor2Off]}
            style={styles.turnOffBtn}
          >
              <Text style={styles.offText}>TURN OFF</Text>  
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{marginBottom: 25}}/>
        <View style={styles.versionText}>
          <Text>Version 1.0</Text>
        </View>

        <Slider
          disabled={sliderDisabled}
          style={{width: 300, height: 40, marginTop: 30 }}
          minimumValue={0}
          maximumValue={360}
          thumbTintColor='#42A26E'
          onValueChange={(value) => {
            setValueChange(Math.floor(value));
          }}
          onSlidingComplete={(value) => {
            setRange(Math.floor(value).toString());
          }}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000" 
        />

        <Text 
          style={styles.angleText}>Angle: {valueChange}
        </Text>


        </ImageBackground>
      </View>
    
  );
}

export default Home;