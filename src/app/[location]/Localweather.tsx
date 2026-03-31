'use client';

import { useEffect, useState } from 'react';

export default function LocalWeather() {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const { latitude, longitude } = pos.coords;

                const res = await fetch(`/api/weather?q=${latitude},${longitude}`);
                const data = await res.json();

                setWeather(data);
                setLoading(false);
            });
        }
    }, []);

    if (loading) return <div className='card loading-skeleton'>위치 파악 중...</div>;

    return (
        <section className='card local-weather-card'>
            <div className='location-tag'>📍 현재 내 위치</div>
            <div className='local-info'>
                <h3>{weather.location.name}</h3>
                <span className='temp'>{weather.current.temp_c}°</span>
            </div>
        </section>
    );
}
