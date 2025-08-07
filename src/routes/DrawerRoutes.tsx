import { createDrawerNavigator } from "@react-navigation/drawer"
//o createNativeStackNavigator é um componente que cria uma pilha de rotas

import Home from "@/app/Home"
import Product from "@/app/Product"
import { MaterialIcons } from "@expo/vector-icons"


export type DrawerRoutesList = {
    home: undefined;
    product: undefined;
}

// criando  uma const com os tipos de rotas que vai ter 
//eu passo o <BottomRoutesList> para poder tipar as rotas
const drawer = createDrawerNavigator<DrawerRoutesList>()

// a sequencia de criação das rotas é: quem estiover primeiro vai ser o primeiro a ser exibido
// nesse caso o Home vai ser o primeiro a ser exibido, pois é o primeiro que foi criado
// ou eu posso em Stack.Screen  passar a propriedade initialRouteName="nome da rota"

// eu posso usar o screenOptions para configurar as opções de cada rota, em nivel de pai e filho para a eftar apenas o filho
export default function BottomTabRoutes() {
    return (
        <drawer.Navigator 
          screenOptions={{  
            headerShown: false,
            drawerActiveBackgroundColor: "#000", // cor do fundo do drawer ativo
            drawerActiveTintColor: "#fff", // cor do texto do drawer ativo
            drawerInactiveTintColor: "#000", // cor do texto do drawer inativo
            drawerStyle: { // estilo do drawer
                backgroundColor: "#fff", // cor do fundo do drawer
                borderTopWidth: 0, // borda do drawer
            },
            }}
        >
            <drawer.Screen name="home" component={Home}
             options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                ),
                drawerLabel: "Home",
             }}
            />
            <drawer.Screen name="product" component={Product}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="add-circle" color={color} size={size} />
                    ),
                    drawerLabel: "Produto",
                }}
            />
        </drawer.Navigator>
    )
}
