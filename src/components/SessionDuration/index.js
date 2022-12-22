import "./style.css";
import * as React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

/**
 * display a custumize tooltip container in component SessionDuration
 * @returns {JSX.Element} custumize tooltip container
 */

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};

/**
 *  chart displaying datas of duration for each session 
 * @returns {JSX.Element} line chart component: SessionDuration
 */

const SessionDuration = () => {
    const { loading, data } = useContext(DataContext)




    return loading ? "en cours de chargement" : <ResponsiveContainer width="100%" height="80%" >
        <LineChart data={data?.averageSessionList?.sessions.map(item => {
            const newItem = item
            const dayList = ["L", "M", "M", "J", "V", "S", "D"]
            newItem.dayLetter = dayList[item.day - 1]
            return newItem
        })}>
            <Line r={0} type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} opacity={0.5} />
            <XAxis dataKey="dayLetter" minTickGap={1} axisLine={false} tickLine={false} tick={{ fill: "#FFF", opacity: 0.5 }} />
            <Tooltip contentStyle={{ border: 0, width: 39, height: 25 }} wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} cursor={false} />
        </LineChart>
    </ResponsiveContainer>

}

export default SessionDuration

