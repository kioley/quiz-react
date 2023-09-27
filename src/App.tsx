import { Quiz } from "../src/components/Quiz.tsx"
import { StateRouter } from "../src/components/StateRouter/index.tsx"
import { Route } from "../src/components/StateRouter/Route.tsx"
import { Menu } from "../src/components/Menu"
import { useQuizStore } from "./store/index.ts"
import { Screens } from "./store/interfaces.ts"

export function App() {
  const screen = useQuizStore((s) => s.screen)

  return (
    <div className="w-screen h-screen bg-img-main bg-no-repeat bg-top flex justify-center bg-cover">
      <div className="h-full w-[calc(55vh)] flex flex-col items-center p-3 [container-type:inline-size] justify-between">
        <StateRouter screen={screen}>
          <Route element={<Menu />} screen={Screens.Menu} />
          <Route element={<Quiz />} screen={Screens.Quiz} />
        </StateRouter>
      </div>
    </div>
  )
}
