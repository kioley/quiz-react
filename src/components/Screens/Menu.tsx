import { quizStore } from "../../store"
import { Button } from "../Button"
import quizImgSrc from "/src/assets/images/quiz.png"
import friendsImgSrc from "/src/assets/images/friends_logo.png"

const buttons = ["Лёгкий", "Средний", "Сложный"]

export function Menu() {
  return (
    <>
      <img src={quizImgSrc} alt="quiz" />
      <img src={friendsImgSrc} alt="friends" />
      <p className="text-[5cqi] text-white text-center">Уровень сложности:</p>
      <div className="w-[73%] basis-[40%] mb-2 flex flex-col justify-between items-center">
        {buttons.map((answer, i) => (
          <Button
            key={i}
            label={answer}
            onClick={() => {
              quizStore.onStart(i)
            }}
          />
        ))}
      </div>
    </>
  )
}
