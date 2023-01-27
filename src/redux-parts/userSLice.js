import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id:0,
        username:"",
        translations: [],
    },

    reducers: {
        //Updates translations by adding a new element to the list of translations
        updateTranslations: (state, action) => {
            state.translations.push(action.payload)
        },
        //clears the list of translations
        clearTranslations:(state) => {
            state.translations = []
        },
        //Switches to a new user
        updateUser: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.translations = action.payload.translations
        }
    }
})

export const {updateUser, updateTranslations, clearTranslations} = userSlice.actions
export default userSlice.reducer