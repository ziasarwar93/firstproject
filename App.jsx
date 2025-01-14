import React from "react";
import { Button, Text, View } from "react-native";
import First from "./src/components/First";

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>React Native Mobile App Development</Text>
      <Text style={{ fontSize: 30 }}>Zia Sarwar</Text>
      <Button title="Press Here" />
      <First/>
      <First/>
    </View>
  );
};

// const First = () => {
//   return (
//     <View>
//     <Text style={{fontSize :20}}>React Native</Text>
//     </View>
//   );
// };


export default App;