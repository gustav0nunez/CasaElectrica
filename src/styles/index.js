import {StyleSheet} from "react-native"



export const styles = StyleSheet.create({
container: {
        flex: 1,
        flexDirection: "row", 
    },
    habitacionesContainer: {
        flex: 3, 
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: 10
    },

    hab: {

    width: "45%",
    height: 200,
    backgroundColor: "red",
    margin: 10,
    padding: 15
    },
    panelControl: {
        width: "100%",
        height: 70,
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    consumo: {
        width: "100%",
        height: 70,
        backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center"
    },
    texto: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    boton: {
        width: 40,
        height: 25,
        backgroundColor: "red",
        margin: 10
    }
})