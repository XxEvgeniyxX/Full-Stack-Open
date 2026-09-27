import Part from "./Part"

const Content = ({ parts }) => {

    return (
        parts.map((part) => 
            <Part key={part.name} 
                partName={part.name} 
                exercises={part.exercises}
            />
        )
    )
}

export default Content