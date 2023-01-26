import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id:0,
        username:"",
        translations: [],
    },

    reducers: {
        updateTranslations: (state, action) => {
            state.translations.push(action.payload)
        },
        clearTranslations:(state) => {
            state.translations = []
        },
        updateUser: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.translations = action.payload.translations
        }
    }
})

export const {updateUser, updateTranslations, clearTranslations} = userSlice.actions
export default userSlice.reducer