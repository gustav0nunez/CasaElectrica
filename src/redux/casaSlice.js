import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocina: false,
    sala: false,
    dormitorio1: false,
    dormitorio2: false,
    baño: false,
    salonJuegos: false,
    consumo: 0,
    termicaSaltada: false,
};

export const casaSlice = createSlice({
    name: "casa",
    initialState,
reducers: {
  toggleLuz: (state, action) => {
    const habitacion = action.payload; 
    
    state[habitacion] = !state[habitacion];

    // 2. Actualizamos el consumo
    if (state[habitacion]) {
      state.consumo += 10; 
    } else {
      state.consumo -= 10; 
    }

    if (state.consumo > 50) {
    state.termicaSaltada = true;
  }
  }
}

})
export const { toggleLuz } = casaSlice.actions;

export default casaSlice.reducer; 
