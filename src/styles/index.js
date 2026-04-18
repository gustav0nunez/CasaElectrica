import {StyleSheet} from "react-native"



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: '#121212',
    },
    panelControl: {
        width: '15%', 
        backgroundColor: "#1f2937",
        paddingVertical: 10,
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: '#374151'
    },
    habitacionesContainer: {
        flex: 1, 
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "center",
        padding: 10,
    },
    hab: {
        width: "30%", 
        height: '40%', 
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 5, 
    },
    consumo: {
        width: '12%',
        alignItems: "center",
        justifyContent: 'flex-end',
    },
    texto: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center'
    },
    boton: {
        width: 60,
        height: 35,
        backgroundColor: "#e74c3c",
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
});