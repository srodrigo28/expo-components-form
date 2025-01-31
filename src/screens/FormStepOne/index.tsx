import { View, Text } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/compoments/Input";
export function FormStepOne2(){
    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                Inputs ? Components
            </Text>

            <Input icon="user" size={28} />
            <Input icon="mail" size={28} />
            <Input icon="key"  size={28} />
            
        </View>
    )
}