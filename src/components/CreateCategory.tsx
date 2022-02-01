import { useForm } from "react-hook-form";
import { ICategory, categoriesState, categoryState } from "../atoms";
import { useRecoilState } from "recoil";

interface ICategoryForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const [categories, setCategories] =
    useRecoilState<ICategory[]>(categoriesState);
  const onValid = ({ category }: ICategoryForm) => {
    console.log("Add category", category);
    setCategories((oldCategories) => {
      const newCategories = [...oldCategories, { name: category }];
      localStorage.setItem(categoriesState.key, JSON.stringify(newCategories));
      return newCategories;
    });
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit<ICategoryForm>(onValid)}>
      <input
        {...register("category", { required: "Please Write Category" })}
        placeholder="Write new category"
        name="category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
