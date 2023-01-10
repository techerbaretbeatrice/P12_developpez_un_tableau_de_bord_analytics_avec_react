import "./style.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'


/**
 * display the text and color of the text of  daily goal percentage in Completion
 * @
 * {@link https://recharts.org/en-US/examples/CustomActiveShapePieChart Rechart}
 * @param {*} props : cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, percent
 * @returns  percentage as text corresponding to the graphic result
 */
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,

    percent
  } = props;

  const textColor = "#000000"

  return (
    <g>
      <Sector className="sector-background"
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}


      />
      <text x={cx} y={cy} dy={0} textAnchor="middle" fill={textColor} className="text-color">
        {`${(1 - percent).toFixed(2) * 100}%`}
      </text>
    </g>
  );
};



/**
 * chart displaying completion of daily goals in percentage
 * {@link https://recharts.org/en-US/examples/CustomActiveShapePieChart Rechart}
 * @component
 * @returns Completion
 */
const Completion = () => {
  const { loading, data } = useContext(DataContext)
  const dataCompletion = [
    { name: "Group B", value: 1 - data?.userCompletion.todayScore },
    { name: "Group A", value: data?.userCompletion.todayScore },

  ];
  const centerPie = [{ name: 'Group C', value: 300 }]
  const COLORS = ["#FBFBFB", "#FF0000"];

  return (loading ? "en cours de chargement" : <span className="radar-container"><ResponsiveContainer width="100%" height="100%"><PieChart cx={110}
    cy={120}>
    <Pie data={centerPie} dataKey="value" cx="50%" cy="50%" outerRadius={75} fill="#FFF" />
    <Pie
      activeIndex={0}
      activeShape={renderActiveShape}
      data={dataCompletion}
      innerRadius={70}
      outerRadius={80}

      dataKey="value"
      endAngle={-450}
      startAngle={90}
      stroke="#FBFBFB"
      cornerRadius={18}
    >
      {dataCompletion.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
  </ResponsiveContainer>
    <span className="radar-label">de votre objectif</span>
  </span>
  );
}


export default Completion
