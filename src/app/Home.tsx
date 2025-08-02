import { View } from "react-native";

import Header from "@/components/Header";
import Title from "@/components/Title";
import ButtonIcon from "@/components/Buttonicon";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {StackRoutesList} from "@/routes/StackRoutes"


// primeor a lista de rotas e o segundo o nome da rota que eu estou
type Props = NativeStackNavigationProp<StackRoutesList, "home">
// dessa forma eu consigo tipar a navigation passando
// passar como props Home ({navigation })
    // essa forma eu nem preciso importar o useNavigation e nem a consta, pq
    // la no meu routes - index. eu ja passo pra geral c
    // <NavigationContainer>
    // <StackRoutes />
    // </NavigationContainer>
    // dessa forma o meu  NavigatorContainer vai disponibilizar todas as rotas para o app
  

export default function Home() {
    const navigation = useNavigation();
    // poderia fazer da seguinte forma
      return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 60,
        }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" 
                onPress={() => navigation.navigate("Product")}
                />
            </Header>
        </View>
    )
}