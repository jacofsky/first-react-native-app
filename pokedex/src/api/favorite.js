import AsyncStorage from "@react-native-async-storage/async-storage";

import { includes, pull } from "lodash";
import { FAVORITES_STORAGE } from "../utils/constants";

export const addPokemonFavoriteApi = async(id) => {
    try {
        const favorites = await getPokemonsFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

export const getPokemonsFavoriteApi = async() => {
    try {
        const response = await AsyncStorage.getItem(FAVORITES_STORAGE)
        return JSON.parse(response || "[]")
        
    } catch (error) {
        throw error 
    }
}

export const isPokemonFavoriteApi = async(id) => {
    try {
        const response = await getPokemonsFavoriteApi()
        console.log('asaasdm',response)
        return includes(response, id)
        
    } catch (error) {
        throw error 
    }
}

export const removePokemonFavoriteApi = async(id) => {
    try {
        const favorites = await getPokemonsFavoriteApi()
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error 
        
    }
}