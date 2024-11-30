import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name='index' options={{
            drawerLabel: 'Home',
            title: 'Index Page of a simple Website',
          }}/>

        <Drawer.Screen name='about'  options={{
            drawerLabel: 'About',
            title: 'About of this Website',
          }}/>
      </Drawer>
    </GestureHandlerRootView >
  )
}

export default DrawerLayout