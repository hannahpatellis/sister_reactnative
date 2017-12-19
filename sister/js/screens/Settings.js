import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

const Settings = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings Screen</Text>
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </View>
)

export default Settings
