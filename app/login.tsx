import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Mybutton from '@/components/mybutton'


const Login = () => {
  const router = useRouter();
const onBack = () => {
  console.log("Going back to Index");
  router.back();
}
  return (<View style={{
    backgroundColor : "lightpink",
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  }}>
    
    <Mybutton title="Back to Index" onPress={onBack} />
    
  </View>
 
  )
}

export default Login