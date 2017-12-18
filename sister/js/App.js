import React from 'react';
import { ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import Dilation from './screens/Dilation'
import PreDilation from './screens/PreDilation'
import PostDilation from './screens/PostDilation'
import Settings from './screens/Settings'
import Journal from './screens/Journal'

const Routes = {
  Dilation: {
    name: 'Dilation',
    screen: Dilation,
  },
  PreDilation: {
    name: 'Pre-dilation',
    screen: PreDilation,
  },
  PostDilation: {
    name: 'Post-dilation',
    screen: PostDilation,
  },
  Settings: {
    name: 'Settings',
    screen: Settings,
  },
  Journal: {
    name: 'Journal',
    screen: Journal,
  },
};

const MainScreen = ({ navigation }) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
    <Button
      title='hello'
      key='hello'
      onPress={() => {
        const { path, params, screen } = Routes['Dilation'];
        const { router } = screen;
        const action = path && router.getActionForPathAndParams(path, params);
        navigation.navigate('Dilation', {}, action);
      }}
    />
  </View>
);

const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});