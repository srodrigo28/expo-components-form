import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/compoments/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/src/compoments/Button";
export function FormStepOne(){
    const { control, handleSubmit } = useForm()
    const emailRef  = useRef<TextInput>(null)
    const nomeRef   = useRef<TextInput>(null)
    const senhalRef = useRef<TextInput>(null)

    function handleNextStep(data: any){
        console.log(data)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Inputs ? Components </Text>
            <Input 
                ref={nomeRef} formProps={{ name: "name", control }} 
                icon="user" size={28} inputProps={{ placeholder: "Nome", 
                    onSubmitEditing: () => nomeRef.current?.focus(), returnKeyType: "next" }}
            />
            <Input 
                ref={emailRef} formProps={{ name: "e-mail", control }} 
                icon="mail" size={28} inputProps={{ placeholder: "E-mail", 
                    onSubmitEditing: () => emailRef.current?.focus(), returnKeyType: "next" }}
            />
            <Input 
                ref={senhalRef} formProps={{ name: "*******", control }} 
                icon="key" size={28} inputProps={{ placeholder: "*******",
                    secureTextEntry: true,  onSubmitEditing: handleSubmit(handleNextStep)}} 
            />
            <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
        </View>
    )
}