import { useState } from 'react'
import Statistic from './components/Statistic'
import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodBtnHandler = () => setGood(prev => prev + 1)
  const addNeutralBtnHandler = () => setNeutral(prev => prev + 1)
  const addBadBtnHandler = () => setBad(prev => prev + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' onClick={ addGoodBtnHandler }/>
      <Button text='neutral' onClick={ addNeutralBtnHandler }/>
      <Button text='bad' onClick={ addBadBtnHandler }/>
      <Statistic goodCount={good} neutralCount={neutral} badCount={bad}/>
    </div>
  )
}

export default App