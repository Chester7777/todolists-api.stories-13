import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "0b171657-160a-4f70-93fb-80213f27dfbf"
    }
})


export const todolistAPI = {
    getTodo(): Promise<AxiosResponse<Array<TodoType>>> {
        return instance.get<Array<TodoType>>(`todo-lists`,)
    },
    postTodo(title: string) {
        return instance.post<CommonResponseType<{item: TodoType}>>(`todo-lists`, {title})
    },
    deleteTodo(todolistId: string) {

        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {

        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    }
}
export type CommonResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: T
}
export type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}