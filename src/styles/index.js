import {StyleSheet} from "react-native"



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#1f2937', 
    },
    panelControl: {
    width: '22%',           
    height: '100%',
    backgroundColor: "#111827", 
    paddingVertical: 10,    
    alignItems: "center",
    justifyContent: "center", 
},
    habitacionesContainer: {
    flex: 6, 
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", 
    alignContent: "center", 
    padding: 10, 
},
    hab: {
        width: "45%",        
    aspectRatio: 1.2,      
    margin: 8,          
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,

},  
        
        /*width: "42%", 
        height: '40%', 
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 5, */
    
    consumo: {

    flex: 2,
    width: '15%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
},
    texto: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center'
    },
    boton: {
    width: '90%',
    height: 35,             
    marginVertical: 4,      
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: "#374151",
}
});