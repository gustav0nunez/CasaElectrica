import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocina: false,
    sala: false,
    dormitorio: false,
    dormitorio2: false,
    baño: false,
    salaJuegos: false,
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
