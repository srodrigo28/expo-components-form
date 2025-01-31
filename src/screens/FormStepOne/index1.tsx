import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons"
export function FormStepOne(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Inputs ? Start
            </Text>

            <View style={{  flexDirection: 'row', padding: 16,
                backgroundColor: 'white', alignItems: 'center',
                marginVertical: 10, borderEndEndRadius: 10,
                borderStartEndRadius: 10,
            }}>
                <Feather name="user" size={28} color="red" />
                <TextInput />
            </View>

            <View style={{  flexDirection: 'row', padding: 16,
                backgroundColor: 'white', alignItems: 'center',
                marginVertical: 10, borderEndEndRadius: 10,
                borderStartEndRadius: 10,
            }}>
                <Feather name="mail" size={28} color="red" />
                <TextInput />
            </View>

            <View style={{  flexDirection: 'row', padding: 16,
                backgroundColor: 'white', alignItems: 'center',
                marginVertical: 10, borderEndEndRadius: 10,
                borderStartEndRadius: 10,
            }}>
                <Feather name="key" size={28} color="red" />
                <TextInput />
            </View>

        </View>
    )
}