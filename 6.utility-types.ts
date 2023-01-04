type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoPreview = Pick<Todo, "title" | "completed">;
// type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};

type TodoPartial = Partial<Todo>;

function updateTodo(todo: Todo, updatedTodoFields: TodoPartial) {
  return {
    ...todo,
    ...updatedTodoFields
  };
}

type ParametersTypeOfUpdateTodo = Parameters<typeof updateTodo>;
type ReturnTypeOfUpdateTodo = ReturnType<typeof updateTodo>;
