import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import {
  categoryState,
  toDoSelector,
  toDoState,
  ICategory,
  categoriesState,
} from "../atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const setCategory = useSetRecoilState<ICategory>(categoryState);
  const categories = useRecoilValue<ICategory[]>(categoriesState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log(categories);
    setCategory({ name: event.currentTarget.value });
    console.log(event.currentTarget.value);
  };
  return (
    <div>
      <h1>Categories</h1>
      <hr />
      <CreateCategory />
      <br />
      <h1>To Dos</h1>
      <hr />
      <form>
        <select onInput={onInput}>
          {categories?.map((cat) => (
            <option value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </form>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IForm) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         {
//           message: "Password are not the same",
//         },
//         { shouldFocus: true }
//       );
//     }
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit<IForm>(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: {
//               value: true,
//               message: "Email is required",
//             },
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "no nicks allowed" : true,
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", { required: "Write here" })}
//           placeholder="First Name"
//         />
//         <span>{errors?.firstName?.message}</span>
//
//         <input
//           {...register("lastName", { required: "Write here" })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.lastName?.message}</span>
//
//         <input
//           {...register("username", { required: "Write here", minLength: 10 })}
//           placeholder="Username"
//         />
//         <span>{errors?.username?.message}</span>
//         <input
//           {...register("password", {
//             required: "Write Here",
//             minLength: {
//               value: 5,
//               message: "Your Message is too short.",
//             },
//           })}
//           placeholder="Password"
//         />
//         <span>{errors?.password?.message}</span>
//         <input
//           {...register("password1", { required: "Write Here", minLength: 5 })}
//           placeholder="Password1"
//         />
//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }
