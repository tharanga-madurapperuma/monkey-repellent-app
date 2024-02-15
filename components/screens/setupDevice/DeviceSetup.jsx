import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

const DeviceSetup = () => {
  return (
    <View style={styles.container}>
      
        <Text style={styles.normalText}>1. Turn on the device using switch</Text>
        <Text style={styles.normalText}>2. Turn on the WiFi on your mobile</Text>
        <Text style={styles.normalText}>3. Select the "Monkey Repellent" and Connect to that network</Text>
        <Text style={styles.normalText}>4. Go to the "Wifi Settings"</Text>
        <Text style={styles.normalText}>5. Manage Router</Text>
        <Text style={styles.titleText}>You can see the Wifi Manager on your browser. Is there any problem? please contact us</Text>
        <Text style={styles.normalText}>6. Choose your WiFi network from menu</Text>
        <Text style={styles.normalText}>7. Enter WiFi Credentials "SSID and PASSWORD"</Text>
    </View>
  )
}

export default DeviceSetup;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
    },

    normalText: {
      fontSize: 16,
      marginTop: 10.
    },

    titleText: {
      fontSize: 18,
      marginTop: 70,
      marginBottom: 20,
      fontWeight: 'bold',
    },
});