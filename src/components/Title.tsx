import { Text, TextProps, View } from "react-native";

export default function Title({children, ...props}:TextProps) {
  return (
    <View>
      <Text 
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: "#000",
      }}
       {...props}
      >
        {children}
      </Text>
    </View>
  );
}