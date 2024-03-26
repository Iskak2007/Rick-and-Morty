import { instance } from "./instance";

export const locationAPI = {
    getALLlocation(params){
        return instance.get('character', {params})
    }
}