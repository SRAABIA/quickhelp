import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
  
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="about"
        options={{
          title: 'About Us',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='info' color={color} />
         
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color= "white",size= 30})=>
            { return (
              <View style={{
                backgroundColor: "maroon",
                width: 55,
                height: 55,
                borderRadius: 50,
                bottom: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
              >
                <FontAwesome name='home' size={size} color={color}/>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact Us',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="contacts" color={color} />

        }}
      />

    </Tabs>
  );
}