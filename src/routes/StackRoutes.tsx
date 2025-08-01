import { createNativeStackNavigator } from "@react-navigation/native-stack"
//o createNativeStackNavigator é um componente que cria uma pilha de rotas

import Home from "@/app/Home"
import Product from "@/app/Product"

// criando  uma const com os tipos de rotas que vai ter 
const Stack = createNativeStackNavigator()

// a sequencia de criação das rotas é: quem estiover primeiro vai ser o primeiro a ser exibido
// nesse caso o Home vai ser o primeiro a ser exibido, pois é o primeiro que foi criado
// ou eu posso em Stack.Screen  passar a propriedade initialRouteName="nome da rota"
export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}
