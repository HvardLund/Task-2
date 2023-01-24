import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id:0,
        username:"hei",
        translations: [],
    },

    reducers: {
        updateTranslations: (state, action) => {
            state.translations.push(action.payload)
        },
        updateUser: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.translations = action.payload.translations
        }
    }
})

export const {updateUser, updateTranslations} = userSlice.actions
export default userSlice.reducer