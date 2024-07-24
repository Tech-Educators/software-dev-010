import {useState} from "react"

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  
  const quiz = [
    {
      id: 1,
      question: 'What is a spider',
      answerOptions: ['Foo', 'Bar', 'Faz', 'Fum'],
      correct: 'Foo'
    }, {
      id: 2,
      question: 'How sunny',
      answerOptions: ['very', 'not at all', 'mild', 'lazer'],
      correct: 'lazer'
    }
  ]

  function handleAnswerClick(answer) {
    if (answer === quiz[currentQuestion].correct) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      alert('quiz finished! you scored score')
      // navigate somewhere else idk
    }
  }
  return (
    <div>
      <h2>{quiz[currentQuestion].question}</h2>
      <div>
        {quiz[currentQuestion].answerOptions.map((option) => (
          <button key={option} onClick={() => handleAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}