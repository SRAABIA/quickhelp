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
  </View>)
}

export default index;