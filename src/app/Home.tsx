import { View } from "react-native";

import Header from "@/components/Header";
import Title from "@/components/Title";
import ButtonIcon from "@/components/Buttonicon";

import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {DrawerRoutesList} from "@/routes/DrawerRoutes"

//minha tipagem com as rotas que eu ten ha diasponivel
//DrawerRoutesList


// primeor a lista de rotas e o segundo o nome da rota que eu estou
type Props = DrawerNavigationProp<DrawerRoutesList, "home">
// dessa forma eu consigo tipar a navigation passando
// passar como props Home ({navigation })
    // essa forma eu nem preciso importar o useNavigation e nem a consta, pq
    // la no meu routes - index. eu ja passo pra geral c
    // <NavigationContainer>
    // <StackRoutes />
    // </NavigationContainer>
    // dessa forma o meu  NavigatorContainer vai disponibilizar todas as rotas para o app
  

export default function Home() {
    const navigation = useNavigation<DrawerNavigationProp<DrawerRoutesList>>(); // dessa forma eu consigo tipar a navigation para ela podr aceitar a propriedade openDrawer
    // poderia fazer da seguinte forma
      return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 60,
        }}>
            <Header>
                <ButtonIcon name="menu" 
                onPress={() => navigation.openDrawer()}
                />
                <Title>Home</Title>
                <ButtonIcon name="add-circle" 
                onPress={() => navigation.navigate("product")}
                />
            </Header>
        </View>
    )
}