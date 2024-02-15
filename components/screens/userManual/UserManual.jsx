import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './userManual.styles';

const UserManual = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.setup}
                onPress={() => {
                    navigation.navigate("Setup Device")
                }}
            >
                <Text style={styles.text}>1. Setup the Device</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.control}
                onPress={() => {
                    navigation.navigate("Controlling Device");
                }}
            >
                <Text style={styles.text}>2. How to Control</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.change}
                onPress={() => {
                    navigation.navigate("Change Connection");
                }}
            >
                <Text style={styles.text}>3. Change the connection / Wifi Router</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserManual;