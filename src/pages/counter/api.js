import { client } from "../../api/client";

export const API = {
    getCounter: function() {
        return client.get('/api/counter')
    },
    saveCounter: function(counter) {
        return client.post('/api/counter/save', {counter})
    }
}