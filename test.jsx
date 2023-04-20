import React from 'react';
import { View, Text } from 'react-native';
import BleManager from 'react-native-ble-manager'

const HelloWorldScreen = () => {
    BleManager.start({ showAlert: false }).then(() => {
        // Success code
        console.log("Module initialized");
    });
    console.log(1)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderWidth: 1, borderColor: 'black' }}>
            <Text>Hello World</Text>
        </View>
    );
};

export default HelloWorldScreen;
