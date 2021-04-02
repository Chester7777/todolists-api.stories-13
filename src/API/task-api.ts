import axios from "axios";
import {strict} from "assert";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.1/`,
    withCredentials: true,
    headers: {
        "api-key": "0b171657-160a-4f70-93fb-80213f27dfbf"
    }
})

export const taskAPI = {
    getTask(todolistId: string)
    {
        return instance.get<GetType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask (todolistId: string, title: string) {
        return instance.post<PostPutDeleteType<{items: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask (todolistId: string, taskId: string, title: string) {
        return instance.put<PostPutDeleteType<{items: TaskType}>>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
    deleteTask (todolistId: string, taskId: string) {
        return instance.delete<PostPutDeleteType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}


type GetType = {
    items: TaskType
    totalCount: number
    error: string
}
type PostPutDeleteType<T = {}> = {
    data: T
    resultCode: number
    messages: string[]
}
type TaskType = {
    description: number
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: number
    deadline: number
    id: string
    todoListId: string
    order: number
    addedDate: string
}
