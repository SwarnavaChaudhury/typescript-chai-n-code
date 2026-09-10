// import axios, { type AxiosResponse } from "axios"
import axios from "axios"
import type { AxiosResponse } from "axios"

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

// axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
//     .then(response => {
//         const data: Todo[] = response.data
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })


const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        // const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/11111111111");
        // console.log("response => ", response)
        console.log("response.data => ", response.data)
        // console.log("response.status => ", response.status)
        // console.log("response.statusText => ", response.statusText)
        // console.log("response.headers => ", response.headers)
        // console.log("response.config => ", response.config)
    }
    catch(error: any) {
        // console.log(error)
        if(axios.isAxiosError(error)) {
            console.log("Axios Error: ", error.message)
            if(error.response) {
                console.log("Error Response: ", error.response.data)
                console.log("Error Status: ", error.response.status)
                console.log("Error Headers: ", error.response.headers)
            }
        }
    }
}

fetchData()