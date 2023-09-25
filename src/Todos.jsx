import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gettAllTodo } from './redux/actions'

const Todos = () => {

    const dispatch = useDispatch()
    useEffect = (() => {
        dispatch(gettAllTodo())
    },[])
    return (
        <div>
        
        </div>
    )
}

export default Todos
