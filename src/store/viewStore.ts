import { IView, Screens } from "./types"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export const useViewStore = create(
  immer<IView>(() => ({
    screen: Screens.Menu,
    isModalActive: false,
  }))
)

const set = useViewStore.setState

export function setScreen(screen: Screens) {
  set((s) => {
    s.screen = screen
  })
}

export function disableModal() {
  set((s) => {
    s.isModalActive = false
  })
}
export function enableModal() {
  set((s) => {
    s.isModalActive = true
  })
}
