import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
    // Esse tipo é para o nome do ícone que vem do MaterialIcons, ou seja
    // ele é uma chave do objeto glyphMap do MaterialIcons que vai ter os nomes dos ícones todos
    //eu recupero atrves do glyphMap
    name: keyof typeof MaterialIcons.glyphMap;
}

export default function ButtonIcon({name, ...props}: Props) {
    return (
            <TouchableOpacity {...props}>
                <MaterialIcons name={name} size={32} />
            </TouchableOpacity>
    )
}