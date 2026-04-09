import { configureStore } from '@reduxjs/toolkit'
import casaReducer from './casaSlice'


export default configureStore({
 reducer: {
    casa: casaReducer
 },
})

