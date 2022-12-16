import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Graph = ({ e, m, h }) => {

    const data = [
        {
            name: "Easy",
            difficulty: e,
        },
        {
            name: "Medium",
            difficulty: m,
        },
        {
            name: "Hard",
            difficulty: h,
        },

    ];


    return (

        <BarChart
            width={450}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="difficulty" fill="#8884d8" />

        </BarChart>

    );
}
export default Graph