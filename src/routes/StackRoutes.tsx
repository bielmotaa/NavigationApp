import { createNativeStackNavigator } from "@react-navigation/native-stack"
//o createNativeStackNavigator é um componente que cria uma pilha de rotas

import Home from "@/app/Home"
import Product from "@/app/Product"



export type StackRoutesList = {
    home: undefined;
    product: undefined;
}

// criando  uma const com os tipos de rotas que vai ter 
//eu passo o <StackRoutesProps> para poder tipar as rotas
const Stack = createNativeStackNavigator<StackRoutesList>()

// a sequencia de criação das rotas é: quem estiover primeiro vai ser o primeiro a ser exibido
// nesse caso o Home vai ser o primeiro a ser exibido, pois é o primeiro que foi criado
// ou eu posso em Stack.Screen  passar a propriedade initialRouteName="nome da rota"

// eu posso usar o screenOptions para configurar as opções de cada rota, em nivel de pai e filho para a eftar apenas o filho
export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
    )
}
