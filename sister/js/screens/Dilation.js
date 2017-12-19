import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

const PreDilation = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Pre Dilation Screen</Text>
    <Button
      onPress={() => navigation.navigate('InDilation')}
      title="Go to dilation screen"
    />
  </View>
);

const InDilation = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>In Dilation Screen</Text>
    <Button
      onPress={() => navigation.navigate('PostDilation')}
      title="Go to post dilation screen"
    />
  </View>
);

const PostDilation = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Post Dilation Screen</Text>
    <Button
      onPress={() => navigation.navigate('Index')}
      title="Go to main screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </View>
);

const Dilation = StackNavigator({
  Home: {
    screen: PreDilation,
  },
  InDilation: {
    screen: InDilation,
  },
  PostDilation: {
    screen: PostDilation,
  }
}, {
  navigationOptions: {
    header: null,
    gesturesEnabled: false
  },
})

export default Dilation
