import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarkChart = ({markPromise}) => {
    const markDataRes = use(markPromise);
    const markData = markDataRes.data;
    const markChartData = markData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.math,
            phy: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
        }
        const avg = (student.phy + student.math + student.chemistry) / 3
        student.avg = avg;
        return student;
    })
    console.log(markChartData)
    return (
        <div>
            <BarChart width={1200} height={400} data={markChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='blue'></Bar>
                <Bar dataKey={'math'} fill='red'></Bar>
                <Bar dataKey={'chemistry'} fill='green'></Bar>
                <Bar dataKey={'phy'} fill='orange'></Bar>
                <Tooltip contentStyle={{
                        backgroundColor: 'black',
                        border: '1px solid orange',
                        borderRadius: '10px',
                        color: 'white'
                    }}></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarkChart;