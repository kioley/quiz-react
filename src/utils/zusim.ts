import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export function zusim<T>(store: T) {
  return create(immer<T>(() => store))
}
