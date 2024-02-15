import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

const ConnectionChange = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.normalText}>1. Turn Off your ESP Connected Router</Text>
        <Text style={styles.normalText}>2. Check the available wifi networks on your mobile</Text>
        <Text style={styles.normalText}>3. Select "Monkey Repellent"</Text>
        <Text style={styles.normalText}>4. Follow normal rules. Check...</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Setup Device")
        }}>
          <Text style={styles.hyperlink}>             - Device Setup -</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ConnectionChange


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  },

  normalText: {
    fontSize: 16,
    marginTop: 10,
  },

  hyperlink: {
    fontSize: 16,
    marginTop: 10,
    color: "#108589",
  }
})