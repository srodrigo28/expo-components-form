
import { TextInput, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"

type Props = {
    icon: keyof typeof Feather.glyphMap;
    size: number;
}

export function Input({ icon, size } : Props ) {
    return(
        <View style={ styles.group } >
            <View style={styles.icon}>
                <Feather name={icon} size={size} color="red" />
            </View>
            <TextInput style={ styles.control }  />
            
        </View>
    )
}