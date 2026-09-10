interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}



const fetchData = async () => {
    try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const response = await fetch("https://jsonpl111111aceholder.typicode.com/todos/1111111111");

        if(!response.ok) {
            throw new Error(`HTTP error ${response.status}`)
        }
        const data: Todo = await response.json()
        console.log("data => ", data)
    }
    catch (error: any) {
        console.log("error => ", error)
    }
}

fetchData()