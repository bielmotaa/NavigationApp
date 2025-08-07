import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//o createNativeStackNavigator é um componente que cria uma pilha de rotas

import Home from "@/app/Home"
import Product from "@/app/Product"
import { MaterialIcons } from "@expo/vector-icons"


export type BottomRoutesList = {
    home: undefined;
    product: undefined;
}

// criando  uma const com os tipos de rotas que vai ter 
//eu passo o <BottomRoutesList> para poder tipar as rotas
const tab = createBottomTabNavigator<BottomRoutesList>()

// a sequencia de criação das rotas é: quem estiover primeiro vai ser o primeiro a ser exibido
// nesse caso o Home vai ser o primeiro a ser exibido, pois é o primeiro que foi criado
// ou eu posso em Stack.Screen  passar a propriedade initialRouteName="nome da rota"

// eu posso usar o screenOptions para configurar as opções de cada rota, em nivel de pai e filho para a eftar apenas o filho
export default function BottomTabRoutes() {
    return (
        <tab.Navigator 
          screenOptions={{  
            headerShown: false,
            tabBarActiveTintColor: "#000", // cor do icone ativo
            tabBarInactiveTintColor: "#000", // cor do icone inativo
            tabBarStyle: { // estilo do tab bar
                backgroundColor: "#fff", // cor do fundo do tab bar
                borderTopWidth: 0, // borda do tab bar
            },
            tabBarLabelPosition: "beside-icon", // posição do label do icone
            }}
        >
            <tab.Screen name="home" component={Home}
             options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                ),
                tabBarLabel: "Home",
             }}
            />
            <tab.Screen name="product" component={Product}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" color={color} size={size} />
                    ),
                    tabBarLabel: "Produto",
                }}
            />
        </tab.Navigator>
    )
}
