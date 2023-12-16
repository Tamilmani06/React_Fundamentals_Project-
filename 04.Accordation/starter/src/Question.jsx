import React from 'react'
import SingleQuestion from './SingleQuestion'

const Question = ({question}) => {
  return (
    <section className="container">
        <h1>Question</h1>
        {question.map((question)=>{
            return <SingleQuestion key={question.id} {...question} />
        })}

    </section>
  )
}

export default Question