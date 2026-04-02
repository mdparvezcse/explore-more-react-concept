import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const saleData = [
    { "name": "Jan", "sales": 4000 },
    { "name": "Feb", "sales": 3000 },
    { "name": "Mar", "sales": 5000 },
    { "name": "Apr", "sales": 4500 },
    { "name": "May", "sales": 6000 },
    { "name": "Jun", "sales": 5500 },
    { "name": "Jul", "sales": 7000 },
    { "name": "Aug", "sales": 6500 },
    { "name": "Sep", "sales": 4800 },
    { "name": "Oct", "sales": 5200 }
]

const BarCharts = () => {
    return (
        <div>

            <BarChart width={600} height={400} data={saleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sales" />
                <YAxis />
                <Tooltip contentStyle={{
                        backgroundColor: 'black',
                        border: '1px solid orange',
                        borderRadius: '10px',
                        color: 'white'
                    }}>                   
                </Tooltip>
                <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>

        </div>
    );
};

export default BarCharts;