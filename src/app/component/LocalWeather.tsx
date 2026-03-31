'use client';

import { useEffect, useState } from 'react';

export default function LocalWeather() {
    const [weather, setWeather] = useState<any>(null);
    const [address, setAddress] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const { latitude, longitude } = pos.coords;
                console.log('위도:', latitude, '경도:', longitude);

                try {
                    // 1. 카카오 API 지역이름
                    const addrRes = await fetch(`/api/location?lat=${latitude}&lon=${longitude}`);
                    const addrData = await addrRes.json();
                    setAddress(addrData.address);

                    // 2. Weather API로 날씨 정보
                    const weatherRes = await fetch(`/api/weather?q=${latitude},${longitude}`);
                    const weatherData = await weatherRes.json();
                    setWeather(weatherData);
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            });
        }
    }, []);

    if (loading) return <div className='card'>위치 분석 중...</div>;

    return (
        <div className='card local-weather'>
            <span className='city-label'>📍 My Current Location</span>
            <h3 className='city-name'>{address || weather?.location.name}</h3>

            {weather && (
                <div className='weather-preview'>
                    <span className='weather-temp'>{weather.current.temp_c}°</span>
                    <span className='weather-text'>{weather.current.condition.text}</span>
                </div>
            )}
        </div>
    );
}
