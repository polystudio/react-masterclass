import { atom, selector } from "recoil";

// export enum Categories {
//   "TO_DO" = "TO_DO",
//   "DONE" = "DONE",
//   "DOING" = "DOING",
// }

export interface ICategory {
  name: string;
}

export interface IToDo {
  text: string;
  category: ICategory;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const defaultCategory = { name: "TO_DO" };

export const categoryState = atom<ICategory>({
  key: "category",
  default: defaultCategory,
});

export const categoriesState = atom<ICategory[]>({
  key: "categories",
  default: [defaultCategory, { name: "DOING" }, { name: "DONE" }],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    const filtered = toDos.filter(
      (toDo) => toDo.category.name === category.name
    );
    console.log("State: ", category, "Filtered: ", filtered);
    return filtered;
  },
});
