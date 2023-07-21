import { start } from "../store"
import { Button } from "./Button"

const buttons = ["Лёгкий", "Средний", "Сложный"]

export function Menu() {
  return (
    <>
      <img src="src/assets/quiz.png" alt="logo" />
      <img src="src/assets/friends_logo.png" alt="logo" />
      <p className="text-[5cqi] text-white text-center">
        Выбери уровень сложности:
      </p>
      <div className="w-[73%] basis-[40%] mb-2 flex flex-col justify-between items-center">
        {buttons.map((answer, i) => (
          <Button key={i} label={answer} onClick={() => start(i)} />
        ))}
      </div>
    </>
  )
}
