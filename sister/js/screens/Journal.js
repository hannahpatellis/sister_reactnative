import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

const Journal = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Journal Screen</Text>
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </View>
)

export default Journal
