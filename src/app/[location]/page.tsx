// "use client"

import { getForecast } from '@/utils/getForecast';
import Button from './Button';

type Props = {
    params: {
        location: string;
    };
    searchParams: {
        name: string;
    };
};

export function generateMetadata({ searchParams }: Props) {
    return {
        title: `날씨 앱 - ${searchParams.name}`,
        description: `${searchParams.name} 날씨를 알려드립니다.`,
    };
}

export default async function Detail({ params, searchParams }: Props) {
    const name = searchParams.name;
    const res = await getForecast(params.location);

    return (
        <main className='container'>
            <header className='header-section'>
                <h1 className='main-title'>{name}의 삼일 예보</h1>
                <p className='subtitle'>최신 기상 데이터를 기반으로 한 상세 예보입니다.</p>
            </header>

            <section className='forecast-grid'>
                {res.forecast.forecastday.map((day) => (
                    <article key={day.date} className='card forecast-item'>
                        <span className='date-badge'>{day.date}</span>
                        <div className='temp-info'>
                            <span className='temp-value'>{day.day.avgtemp_c}</span>
                            <span className='temp-unit'>°C</span>
                        </div>
                        <p className='status-text'>평균 기온</p>
                    </article>
                ))}
            </section>

            <footer className='action-footer'>
                <Button />
            </footer>
        </main>
    );
}
