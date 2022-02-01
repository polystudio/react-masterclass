import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState, defaultCategory, toDoState } from "../atoms";
import { stringify } from "querystring";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const onValid = ({ toDo }: IForm) => {
    console.log("add to do", toDo);
    setToDos((oldToDos) => {
      const newToDos = [
        { text: toDo, id: Date.now(), category: defaultCategory },
        ...oldToDos,
      ];
      localStorage.setItem(toDoState.key, JSON.stringify(newToDos));
      return newToDos;
    });
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit<IForm>(onValid)}>
      <input
        {...register("toDo", { required: "Please write To Do" })}
        placeholder="Write a to do"
        name="toDo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
