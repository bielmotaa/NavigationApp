// essa é a tipagem para as rotas do app
// ambes estao com undefined pois nao tem parametros
// se tivessem parametros, seria assim:
// Home: { id: string };
// Product: { id: string };

export type RootStackParamList = {
    Home: undefined;
    Product: undefined;
};



declare global {
    namespace ReactNavigation {
        //estou adicionando a tipagem do RootStackParamList a todas as rotas do app
        //como se eu eu estivesse adicionando uma nova lista de rotas na lista padrao de  RootParamList
        interface RootParamList extends RootStackParamList {}
    }
}