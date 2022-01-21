import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes
//BaseURL:https://sujeitoprogramador.com
//Todos os filmes: ?api=filmes
//Filmes individuais: ?api=filmes/123

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;



