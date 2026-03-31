import { getForecast } from '@/utils/getForecast';
import HourlyChart from '../../component/Hourlychart';
import Link from 'next/link';

interface Props {
    params: { location: string };
    searchParams: { name: string };
}

export default async function ForecastPage({ params, searchParams }: Props) {
    const { location } = params;
    const name = searchParams.name;

    const res = await getForecast(location);
    const hourlyData = res.forecast.forecastday[0].hour;

    return (
        <main className='container'>
            <header className='header-section'>
                <Link href='/' className='back-link'>
                    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                        <path d='M19 12H5M12 19l-7-7 7-7' />
                    </svg>
                    Back to Dashboard
                </Link>

                <h1 className='main-title'>{name} 24시간 예보</h1>
                <p className='subtitle'>시간대별 정밀 기온 추이를 확인하세요.</p>
            </header>

            <section className='content-section'>
                <HourlyChart data={hourlyData} />
            </section>
            <div className='info-grid'>
                <div className='card mini-card'>
                    <span>최고 기온</span>
                    <strong>{res.forecast.forecastday[0].day.maxtemp_c}°</strong>
                </div>
                <div className='card mini-card'>
                    <span>최저 기온</span>
                    <strong>{res.forecast.forecastday[0].day.mintemp_c}°</strong>
                </div>
            </div>
        </main>
    );
}
