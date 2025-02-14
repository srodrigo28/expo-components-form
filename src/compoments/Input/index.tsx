import React from "react"

import { TextInput, Text, TextInputProps, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"
import { forwardRef } from "react"

import { Controller, UseControllerProps } from "react-hook-form"

type Props = {
    error: string;
    icon: keyof typeof Feather.glyphMap;
    size: number;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}

const Input = forwardRef<TextInput, Props>(({ icon, error = '', size, formProps, inputProps }, ref ) => {
    return(
        <Controller  
            render= { ( {field} ) => (
                <View style={styles.container}>
                    <View style={ styles.group }>
                    
                    <View style={styles.icon}>
                        <Feather name={icon} size={size} color="red" />
                    </View>
                    
                    <TextInput 
                        ref={ref}
                        {...inputProps}  
                        value={field.value}
                        style={ styles.control } 
                        onChangeText={field.onChange}
                        placeholderTextColor="#ccc"
                    />    
                </View>
                    { error.length > 0 &&
                            <Text style={styles.error}>
                                {error}
                            </Text>
                        }
                </View>

                
            )}
            {...formProps}
        />
    )
});

export { Input };