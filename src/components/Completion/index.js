import "./style.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

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

  const textColor = "#FF0000"

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
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={textColor} className="text-color">
        {`${(1 - percent) * 100}%`}
      </text>
    </g>
  );
};


const Completion = () => {
  const { loading, data } = useContext(DataContext)
  const dataCompletion = [
    { name: "Group B", value: 1 - data?.userCompletion.todayScore },
    { name: "Group A", value: data?.userCompletion.todayScore },

  ];
  const centerPie = [{ name: 'Group C', value: 300 }]
  const COLORS = ["#FBFBFB", "#FF0000"];

  return (loading ? "en cours de chargement" : <ResponsiveContainer width="100%" height="100%"><PieChart cx={110}
    cy={120}>
    <Pie data={centerPie} dataKey="value" cx="50%" cy="50%" outerRadius={75} fill="#FFF" />
    <Pie
      activeIndex={0}
      activeShape={renderActiveShape}
      data={dataCompletion}
      innerRadius={70}
      outerRadius={80}

      dataKey="value"
      endAngle={450}
      startAngle={0}
      stroke="#FBFBFB"
      cornerRadius={18}
    >
      {dataCompletion.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
  </ResponsiveContainer>
  );
}




export default Completion
