import { client } from "../../api/client";
export const API = {
    getCounter: function() {
        return client.get('/api/counter')
    }
}