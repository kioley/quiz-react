import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import data from "../data/friends-quiz-data.json"

function zusim<T>(store: T) {
  return create(immer<T>(() => store))
}

export const useQuizStore = zusim<IState>({
  questions: data,
})

const [set, get] = [useQuizStore.setState, useQuizStore.getState]

// export async function queryTasks() {
//   const response = await fetch(
//     `https://dummyjson.com/todos/user/${Math.floor(Math.random() * 50) + 1}`
//   ).then((res) => res.json())

//   set((state) => {
//     state.tasks.splice(0, 0, ...response.todos)
//   })
//   // console.log(response.todos)
//   // console.log(get().tasks)
//   const tasks = get().tasks
//   tasks.length && (id = tasks[tasks.length - 1].id)
// }

// export function toggleTaskDone(id: number) {
//   set((state) => {
//     state.tasks.forEach((task) => task.id === id && (task.done = !task.done))
//   })
// }
