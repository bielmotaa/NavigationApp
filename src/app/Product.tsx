import { View } from "react-native";

import Header from "@/components/Header";
import Title from "@/components/Title";
import ButtonIcon from "@/components/Buttonicon";

export default function Product() {
    return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 54,
        }}>
            <Header>
                <ButtonIcon name="arrow-circle-left" />
                <Title>Produto</Title>
            </Header>
        </View>
    )
}