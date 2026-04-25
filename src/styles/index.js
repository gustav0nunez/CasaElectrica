import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: '#111827', 
    },
    panelControl: {
    flex: 1.5,             
    backgroundColor: "#0f172a", 
    alignItems: "center",
    justifyContent: "center", 
    borderRightWidth: 1,
    borderRightColor: '#1e293b'
},
habitacionesContainer: {
    flex: 8.4,             
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", 
    alignContent: "center", 
    alignItems: "center",
    padding: 10,
},
consumo: {
    flex: 0.8,               
    alignItems: "center",     
    justifyContent: "center",  
    backgroundColor: "#0f172a",
    borderLeftWidth: 1,
    borderLeftColor: '#1e293b'
},
hab: {
    width: "28%",          
    aspectRatio: 1.0,      
    margin: 10,          
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5, 
},
    texto: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
    boton: {
    width: '90%',
    height: 25,            
    marginVertical: 2,      
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: "#374151",
}
});