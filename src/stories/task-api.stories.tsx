import React, {useEffect, useState} from "react";
import {taskAPI} from "../API/task-api";


export default {
    title: "API task"
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a0bbebe7-8c0e-409c-8a88-8ad3d20b2c0f";
        taskAPI.getTask(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null);

    useEffect(() => {
        const todolistId = "a0bbebe7-8c0e-409c-8a88-8ad3d20b2c0f";
        const title = "NewTask>>>>>>>>>>>>>>"
        taskAPI.createTask(todolistId, title)
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null);

    useEffect(() => {
        const todolistId = "a0bbebe7-8c0e-409c-8a88-8ad3d20b2c0f";
        const taskId = "664c7848-8c73-43ce-8ba4-f8a80afea485";
        const title = "Ferrari"

        taskAPI.updateTask(todolistId, taskId, title)
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null);

    useEffect(() => {
        const todolistId = "a0bbebe7-8c0e-409c-8a88-8ad3d20b2c0f";
        const taskId = "1b7ccaf7-f71d-407d-886c-58dcddf80314";
        taskAPI.deleteTask(todolistId, taskId)
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}