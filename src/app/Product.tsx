import { View } from "react-native";

import Header from "@/components/Header";
import Title from "@/components/Title";
import ButtonIcon from "@/components/Buttonicon";

import { useNavigation } from "@react-navigation/native";

export default function Product() {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 54,
        }}>
            <Header>
                <ButtonIcon name="arrow-circle-left" 
                  onPress={() => navigation.goBack()} 
                  />
                <Title>Produto</Title>
            </Header>
        </View>
    )
}