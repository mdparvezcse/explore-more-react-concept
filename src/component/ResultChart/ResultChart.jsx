import React from 'react';
import { BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const studentData = [
    { "id": 1, "name": "Rahim Ahmed", "math": 85, "physics": 78, "chemistry": 82 },
    { "id": 2, "name": "Karim Hasan", "math": 90, "physics": 88, "chemistry": 91 },
    { "id": 3, "name": "Ayesha Rahman", "math": 70, "physics": 75, "chemistry": 72 },
    { "id": 4, "name": "Nusrat Jahan", "math": 88, "physics": 84, "chemistry": 86 },
    { "id": 5, "name": "Sakib Hossain", "math": 60, "physics": 65, "chemistry": 63 },
    { "id": 6, "name": "Fahim Chowdhury", "math": 95, "physics": 92, "chemistry": 94 },
    { "id": 7, "name": "Tanvir Islam", "math": 78, "physics": 80, "chemistry": 77 },
    { "id": 8, "name": "Mim Akter", "math": 82, "physics": 79, "chemistry": 85 },
    { "id": 9, "name": "Rifat Mahmud", "math": 68, "physics": 70, "chemistry": 66 },
    { "id": 10, "name": "Jannat Sultana", "math": 92, "physics": 89, "chemistry": 90 }
]

const ResultChart = () => {
    return (
        <div className='md:mx-25 md:my-7'>
            <LineChart width={1000} height={500} data={studentData} >
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'chemistry'}></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                
                <Tooltip
                    cursor={{
                        stroke: 'yellow',
                    }}
                    contentStyle={{
                        backgroundColor: 'black',
                        borderColor: 'orange',
                        borderRadius: '10px'
                    }}
                />

            </LineChart>

        </div>
    );
};

export default ResultChart;