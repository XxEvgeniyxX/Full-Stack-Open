

const StatisticLine = ({ text, value, type = "default" }) => 
    <tr>
        <td>{ text }</td> 
        <td>{ value } { type === "percent" ? "%" : null}</td>
    </tr>

export default StatisticLine