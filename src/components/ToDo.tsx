import { IToDo, toDoState, categoriesState, ICategory } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const toDos = useRecoilValue(toDoState);
  const categories = useRecoilValue<ICategory[]>(categoriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: { name } };
      console.log(
        "replace the to do in the index",
        targetIndex,
        "with",
        newToDo
      );

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span> {text} </span>
      {categories.map((cat) => {
        return (
          <button name={cat.name} onClick={onClick}>
            {cat.name}
          </button>
        );
      })}
    </li>
  );
}

export default ToDo;
