import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    // <View  style={{
    //   flex: 1,
    //   justifyContent:"center",
    //   alignItems:"center",
    //   backgroundColor: "white",
    // }}>
    //   <Text>RootLayout
    //   </Text>
    // </View>
    <Stack>
      <Stack.Screen name='(drawer)' options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='(tab)' options={{
        headerShown: false,
      }}/>

      <Stack.Screen name='index'  options={{
        // headerShown: false,
        title: "Home",
        headerStyle: {
          backgroundColor: "orange",
          },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'},
      }}/>
      
      <Stack.Screen name='about/index' options={{
        title: "About",
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'}
      }}/>
    </Stack>

  )
}
export default RootLayout