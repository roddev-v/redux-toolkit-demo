import React from 'react';
import { useSelector} from "react-redux";
import {AppState} from "../redux";
import { increment, decrement, show, hide } from '../redux/slices/basic.slice';
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";

function BasicComponent() {
    const counter = useSelector((state: AppState) => state.basic.counter);
    const loading = useAppSelector(state => state.basic.loading);
    const dispatch = useAppDispatch();

    const showSpinner = () => {
        dispatch(show());
        setTimeout(() => dispatch(hide()), 5000);
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => showSpinner()}>Show Spinner</button>
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default BasicComponent;
