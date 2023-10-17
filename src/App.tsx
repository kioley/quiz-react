import { Quiz } from "./components/Screens/Quiz.tsx"
import { StateRouter } from "../src/components/StateRouter/index.tsx"
import { Route } from "../src/components/StateRouter/Route.tsx"
import { Menu } from "./components/Screens/Menu.tsx"
import { Screens } from "./store/types.ts"
import { Defeat } from "./components/Screens/Defeat.tsx"
import { Win } from "./components/Screens/Win.tsx"
import { useViewStore } from "./store/viewStore.ts"

export function App() {
  const screen = useViewStore((s) => s.screen)

  return (
    <div className="w-screen h-screen bg-img-main bg-no-repeat bg-top flex justify-center bg-cover">
      <div className="h-full w-[calc(55vh)] flex flex-col items-center p-3 [container-type:inline-size] justify-between">
        <StateRouter screen={screen}>
          <Route element={<Menu />} screen={Screens.Menu} />
          <Route element={<Quiz />} screen={Screens.Quiz} />
          <Route element={<Win />} screen={Screens.Win} />
          <Route element={<Defeat />} screen={Screens.Defeat} />
        </StateRouter>
      </div>
    </div>
  )
}
