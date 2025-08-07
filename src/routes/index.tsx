import "react-native-gesture-handler"
// esse arquivo é para quando eu for usar o drawer, pois o drawer usa o gesture handler e
// ele sempre tem que ser importado no app.tsx ou arquivo principal

import { NavigationContainer } from "@react-navigation/native"
import DrawerRoutes from "./DrawerRoutes"
// o NavigationContainer é o componente que vai conter todas as rotas,
//  ele é o responsavel por gerenciar o estado da navegação
// o NavigationContainer vai disponibilizas todas as rotas para o app

// fluxo de dev de navegação
    // criar o stack de rotas
    // criar o navigation container que vai conter todas as rotas
    // no app eu chamo o navigation container (pois ele vai disponibilizar todas as rotas para o app)
    // entao eu chamo esse arquivo index.tsx (Router) que vai conter o navigation container e o stack de rotas



export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
            {/* <BottomTabRoutes /> */}
            {/* <StackRoutes /> */}
        </NavigationContainer>
    )
}