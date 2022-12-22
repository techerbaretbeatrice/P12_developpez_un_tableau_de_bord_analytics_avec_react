import "./style.css";
import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Performance = () => {
    const { loading, data } = useContext(DataContext)

    const { performance } = data || {}
    const kinds = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
    }

    const chartData = performance?.data.map(item => {
        const newItem = { ...item }
        newItem.key = kinds[newItem.kind]
        return newItem
    })

    return loading ? "en cours de chargement" : <ResponsiveContainer width="100%" height="100%">
        <RadarChart
            outerRadius={70}
            data={chartData}
        >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis cx={0} dataKey="key" tick={{ fill: "#FFF", fontSize: "11px", fontFamily: "'Roboto', sans-serif" }} />

            <Radar
                name="Mike"
                dataKey="value"
                stroke="#FF0101"
                fill="#FF0101"
                fillOpacity={0.7}
            />
        </RadarChart>
    </ResponsiveContainer >
}

export default Performance
