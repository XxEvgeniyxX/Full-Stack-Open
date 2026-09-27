import StatisticLine from "./StatisticLine"

const weights = {
    good: 1,
    neutral: 0,
    bad: -1
}

const Statistic = ({ goodCount, neutralCount, badCount }) => {
    const isDataExist = goodCount || neutralCount || badCount
    const allCount = goodCount + neutralCount + badCount
    const average = Math.round((goodCount * weights.good + neutralCount * weights.neutral + badCount * weights.bad) / allCount * 10) / 10
    const positive = Math.round(goodCount / allCount * 1000) / 10

    return (
        <>
            <h1>Statistic</h1>
            { isDataExist 
                ? <table>
                    <StatisticLine text='good' value={ goodCount }/>
                    <StatisticLine text='neutral' value={ neutralCount }/>
                    <StatisticLine text='bad' value={ badCount }/>
                    <StatisticLine text='all' value={ allCount }/>
                    <StatisticLine text='average' value={ average }/>
                    <StatisticLine text='positive' value={ positive } type="percent"/>  
                </table>  
                : <p>No feedback given</p>
            }      
        </>

    )
}

export default Statistic