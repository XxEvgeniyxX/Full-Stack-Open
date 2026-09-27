import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const totalCount = course.parts.reduce((prev, cur) => prev + cur.exercises, 0)

  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total count={totalCount}/>
    </div>
  )
}

export default App