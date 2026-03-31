'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface Props {
    data: any[];
}

export default function HourlyChart({ data }: Props) {
    const chartData = data.map((item) => ({
        time: item.time.split(' ')[1],
        temp: item.temp_c,
    }));

    return (
        <div className='card chart-card'>
            <h3 className='chart-title'>시간대별 기온 추이</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id='colorTemp' x1='0' y1='0' x2='0' y2='1'>
                                <stop offset='5%' stopColor='#6366f1' stopOpacity={0.3} />
                                <stop offset='95%' stopColor='#6366f1' stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray='3 3' stroke='rgba(255,255,255,0.05)' vertical={false} />
                        <XAxis
                            dataKey='time'
                            stroke='#94a3b8'
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            interval={3}
                        />
                        <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                color: '#fff',
                            }}
                            itemStyle={{ color: '#6366f1' }}
                        />
                        <Area
                            type='monotone'
                            dataKey='temp'
                            stroke='#6366f1'
                            strokeWidth={3}
                            fillOpacity={1}
                            fill='url(#colorTemp)'
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
