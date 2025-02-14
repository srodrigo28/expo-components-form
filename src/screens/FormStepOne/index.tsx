import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/compoments/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "@/src/compoments/Button";
export function FormStepOne(){
    const { control, handleSubmit, formState: { errors } } = useForm()

    const emailRef  = useRef<TextInput>(null)
    const nomeRef   = useRef<TextInput>(null)
    const senhalRef = useRef<TextInput>(null)

    function handleNextStep(data: any){
        alert('oi')
        console.log(data)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Inputs ? Components </Text>

            <Input 
                error={errors.name?.message}
                ref={nomeRef} formProps={{ name: "name", control, rules: { required: "Nome é obrigatório. " } }} 
                icon="user" size={28} inputProps={{ placeholder: "Nome", 
                    onSubmitEditing: () => nomeRef.current?.focus(), returnKeyType: "next" }}
            />

            <Input 
                error={errors.name?.message}
                ref={emailRef} formProps={{ name: "e-mail", control, rules: { required: "E-mail é obrigatório. " } }} 
                icon="mail" size={28} inputProps={{ placeholder: "E-mail", 
                    onSubmitEditing: () => emailRef.current?.focus(), returnKeyType: "next" }}
            />

            <Input
                error={errors.name?.message} 
                ref={senhalRef} formProps={{ name: "*******", control, rules: { required: "Senha é obrigatória. " } }} 
                icon="key" size={28} inputProps={{ placeholder: "*******",
                    secureTextEntry: true,  onSubmitEditing: handleSubmit(handleNextStep)}} 
            />

            <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
        </View>
    )
}