import { useQuizStore } from "./store"

function App() {
  const questions = useQuizStore((s) => s.questions)
  return (
    <>
      <div className="w-screen h-screen bg-img-main bg-no-repeat bg-top flex flex-col items-center">
        {questions.map((q) => (
          <p>{q.question}</p>
        ))}
      </div>
    </>
  )
}

export default App
