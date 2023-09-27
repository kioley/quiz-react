import { onStart } from "../store"
import { Button } from "./Button"
import quizImgUrl from "../assets/images/quiz.png"
import logoImgUrl from "../assets/images/friends_logo.png"

const buttons = ["Лёгкий", "Средний", "Сложный"]

export function Menu() {
  return (
    <>
      <img src={quizImgUrl} alt="logo" />
      <img src={logoImgUrl} alt="logo" />
      <p className="text-[5cqi] text-white text-center">Уровень сложности:</p>
      <div className="w-[73%] basis-[40%] mb-2 flex flex-col justify-between items-center">
        {buttons.map((answer, i) => (
          <Button
            key={i}
            label={answer}
            onClick={() => {
              onStart(i)
            }}
          />
        ))}
      </div>
    </>
  )
}
