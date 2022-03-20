import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async(endPointUrl ) => {
    try {

        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        const response = await fetch(endPointUrl || url)
        const result = await response.json()

        return result
        
    } catch (error) {
        throw error
    }
}

export const getPokemnDetailsByUrlApi = async(url) => {
    try {
        const response = await fetch(url)
        const result = await response.json()

        return result
        
    } catch (error) {
        throw error
    }
}

export const getPokemonDetailsApi = async(id) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url)
        const result = await response.json()

        return result
        
    } catch (error) {
        throw error
    }
}