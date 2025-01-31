import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    group: {
        width: '100%',
        height: 56,
        marginVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: "hidden",
        borderEndEndRadius: 10,
        borderStartEndRadius: 10,
    },
    control: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 16,
        fontSize: 18,
        outlineColor: '#FFFFFF',
    },
    icon:{
        height: 56,
        width: 56,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRightWidth: 5,
        borderRightColor: "#CCC"
    }
})