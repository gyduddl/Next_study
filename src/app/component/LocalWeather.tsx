'use client';

import { useEffect, useState } from 'react';

export default function LocalWeather() {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const res = await fetch(`/api/weather?q=${latitude},${longitude}`);
                        const data = await res.json();
                        setWeather(data);
                    } catch (err) {
                        console.error('날씨 정보 호출 실패:', err);
                    } finally {
                        setLoading(false);
                    }
                },
                (error) => {
                    console.error('위치 권한 거부 또는 오류:', error);
                    setLoading(false);
                },
            );
        }
    }, []);

    if (loading) return <div className='card'>내 위치 찾는 중...</div>;
    if (!weather) return null;
    return (
        <div className='card local-weather'>
            <span className='city-label'>📍 Current Location</span>
            <h3 className='city-name'>{weather.location.name}</h3>
            <div className='weather-preview'>
                <span className='weather-temp'>{weather.current.temp_c}°</span>
                <span className='weather-text'>{weather.current.condition.text}</span>
            </div>
        </div>
    );
}
