import { EntityAdapter } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks/hooks";
import {
  loadTodos,
  removeRandom,
  removeMore,
} from "../redux/slices/todos.slice";

function TodosComponent() {
  const data = useAppSelector((store) => store.todos.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("test");
    setTimeout(() => dispatch(loadTodos()), 1000);
  }, [dispatch]);

  console.log(data);
  return (
    <div>
      <button onClick={() => dispatch(removeRandom())}>Remove id 10</button>
      <button onClick={() => dispatch(removeMore())}>Remove id 10</button>
      {Object.values(data).map((t: any) => {
        return <div>{t.title}</div>;
      })}
    </div>
  );
}

export default TodosComponent;
