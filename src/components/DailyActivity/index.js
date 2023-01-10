import "./style.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'


/**
 * display a custumize tooltip container in component Dailyactivity
 * @component
 * {@link https://recharts.org/en-US/examples/CustomContentOfTooltip Recharts}
 * @returns  custumize tooltip container with weight value (kg) and calory value (kcal)
 */

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-activity">
                <p className="label-activity">{`${payload[0].value} Kg`}</p>
                <p className="label-activity">{`${payload[1].value} Kcal`}</p>
            </div>
        );
    }

    return null;
};

/**
 * chart displaying datas of daily activities for a user (weight and burned calories per day)
 * {@link https://recharts.org/en-US/examples/BiaxialBarChart Recharts}
 * @component
 * @returns {JSX.Element} bar chart component:  DaylyActivity
 */

const DailyActivity = () => {
    const { loading, data } = useContext(DataContext)
    const sortedData = Array.from(data?.activityList?.sessions || []).sort((a, b) => {
        if (a.kilogram < b.kilogram) return -1
        return 1
    }) || []
    const min = sortedData[0]?.kilogram
    const max = sortedData[sortedData?.length - 1]?.kilogram
    return loading ? "en cours de chargement" : <ResponsiveContainer width="100%" height="80%">
        <BarChart className="bar-chart"
            height="60%"
            data={data?.activityList?.sessions}

            margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="key" tickLine={false} tickSize={14} />
            <YAxis domain={[min - 1, max]} yAxisId="right" axisLine={false} orientation="right" tickCount={3} tickLine={false} tickMargin={20} />
            <YAxis yAxisId="left" axisLine={false} orientation="left" tickCount={3} tickLine={false} tick={false} tickMargin={20} />
            <Tooltip contentStyle={{ background: "#E60000", border: 0, width: 20, height: 30 }} wrapperStyle={{ outline: "none", top: -25, left: 5 }} content={<CustomTooltip />} />
            <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ top: -20, left: 25 }} iconType="circle" iconSize={8} />
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} name="Poids(Kg)" />
            <Bar yAxisId="left" dataKey="calories" fill=" #E60000" barSize={7} radius={[3, 3, 0, 0]} name="Calories brûlées (Kcal)" />
        </BarChart>
    </ResponsiveContainer >

}

export default DailyActivity

