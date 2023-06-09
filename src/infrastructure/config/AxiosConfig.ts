import axios from 'axios';

export const network = axios.create({
    baseURL: "https://reqres.in/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000,
    method: "get"
})

    // public getInstance(){
    //     const instance = axios.create({
    //         baseURL: "https://reqres.in/",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         timeout: 10000,
    //         method: "get"
    //     })
    //     return instance
    // }