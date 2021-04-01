import React, {useEffect, useState} from "react"
import {todolistAPI} from "../API/todolist-api";

export default {
    title: "API"
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todolistAPI.getTodo()
            .then((res) => {
                setState(res.data)
            })

    }, [])

    // return <div> {JSON.stringify(state)}</div>
    return <pre>{JSON.stringify(state, null, 2)}</pre>

}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "newTodolist"
        todolistAPI.postTodo(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "c1dcaac8-599e-40c0-9359-cf6d3253d7aa";
        todolistAPI.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "c1dcaac8-599e-40c0-9359-cf6d3253d7aa";
        let title = "Css";
        todolistAPI.updateTodoTitle(todolistId, title)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
