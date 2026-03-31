import Link from 'next/link';
import { getCurrentWeather } from '@/utils/getCurrentWeather';
import { getTime } from '@/utils/getTime';
import RevalidateButton from './component/RevalidateButton';
import LocalWeather from './component/LocalWeather';

export default async function Home() {
    const res = await getCurrentWeather('seoul');
    const res_N = await getCurrentWeather('NYC');
    const res_L = await getCurrentWeather('london');
    const time = await getTime(res.location.tz_id);

    const cities = [
        { id: 'seoul', name: '서울', label: 'Seoul' },
        { id: 'NYC', name: '뉴욕', label: 'New York' },
        { id: 'london', name: '런던', label: 'London' },
    ];

    return (
        <main className='container'>
            <header className='header-section'>
                <h1 className='main-title'>Global Weather</h1>
                <LocalWeather />
                <div className='time-display card'>
                    <span className='time-label'>현재 현지 시각</span>
                    <h2 className='time-value'>{time.dateTime.split('T')[1].substring(0, 5)}</h2>
                    <p className='time-date'>{time.dateTime.split('T')[0]}</p>
                </div>
            </header>

            <section className='city-grid'>
                {cities.map((city) => (
                    <Link href={`/${city.id}?name=${city.name}`} key={city.id} className='city-card-wrapper'>
                        <article className='card city-card'>
                            <div className='city-info'>
                                <span className='city-label'>{city.label}</span>
                                <h3 className='city-name'>{city.name}</h3>
                            </div>

                            {city.id === 'seoul' && (
                                <div className='weather-preview'>
                                    <span className='weather-text'>{res.current.condition.text}</span>
                                    <span className='weather-temp'>{res.current.temp_c}°</span>
                                </div>
                            )}

                            {city.id === 'NYC' && (
                                <div className='weather-preview'>
                                    <span className='weather-text'>{res_N.current.condition.text}</span>
                                    <span className='weather-temp'>{res_N.current.temp_c}°</span>
                                </div>
                            )}

                            {city.id === 'london' && (
                                <div className='weather-preview'>
                                    <span className='weather-text'>{res_L.current.condition.text}</span>
                                    <span className='weather-temp'>{res_L.current.temp_c}°</span>
                                </div>
                            )}

                            <div className='go-detail'>상세보기 →</div>
                        </article>
                    </Link>
                ))}
            </section>

            <footer className='action-footer'>
                <RevalidateButton tag={'time'} />
            </footer>
        </main>
    );
}
