import { Game } from "./components/Screens/Game"
import { Menu } from "./components/Screens/Menu"
import { Screens } from "./store/types"
import { Defeat } from "./components/Screens/Defeat"
import { Win } from "./components/Screens/Win"
import { state } from "./store/store"

export function App() {
  const screen = state((s) => s.screen)

  let view

  switch (screen) {
    case Screens.Menu:
      view = <Menu />
      break
    case Screens.Game:
      view = <Game />
      break
    case Screens.Win:
      view = <Win />
      break
    case Screens.Defeat:
      view = <Defeat />
  }

  return (
    <div className="w-screen h-screen bg-img-main bg-no-repeat bg-top flex justify-center bg-cover">
      <div className="h-full w-[calc(55vh)] flex flex-col items-center p-3 [container-type:inline-size] justify-between">
        {view}
      </div>
    </div>
  )
}
