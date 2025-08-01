import { View } from "react-native";

// deigo que o children é um componente filho do tipo React.ReactNode
export default function Header({children}: {children: React.ReactNode}) {
    return (
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
            marginBottom: 54,
        }}>
            {children}
        </View>
    )
}