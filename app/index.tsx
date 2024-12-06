import Mybutton from "@/components/mybutton";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

const onContinue = () => {
  console.log("Continue");
  router.push("/login");
}
  return (<View style={{
    backgroundColor : "lightpink",
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  }}>
    
    <Mybutton title="Login" onPress={onContinue} />
    
  </View>
 
  )
}

export default Index;