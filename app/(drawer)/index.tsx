import { Link } from "expo-router";
import { Text, View } from "react-native";
const index = () => {
  return (<View style={{
    backgroundColor : "lightpink",
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  }}>
    <Text style={{
      fontSize: 10,
      fontWeight : "bold",
      color: "purple"
    }}
    >This is HelLo WorLD!</Text>
    <Text style={{
      fontSize: 20,
      fontWeight : "bold",
      color: "purple"
    }}
    >This is HelLo WorLD!</Text>
    <Text style={{
      fontSize: 30,
      fontWeight : "bold",
      color: "purple"
    }}
    >This is HelLo WorLD!</Text>
     <Link href="/about" asChild>
     <Text style={{
      fontSize: 60,
      fontWeight : "400",
      color: "black",
    }}>
      Check About
     </Text>
      
     </Link>
  </View>
 
  )
}

export default index;