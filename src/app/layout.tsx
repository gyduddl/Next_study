import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Weather App',
        default: 'Weather App - Global Forecast',
    },
    description: '전 세계 주요 도시의 실시간 날씨와 3일 예보를 확인하세요.',
    viewport: 'width=device-width, initial-scale=1',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            {' '}
            <body className={`${inter.className} antialiased`}>
                <div className='layout-wrapper'>
                    <div className='bg-glow top-left' />
                    <div className='bg-glow bottom-right' />

                    <nav className='top-nav'>
                        <div className='nav-content'>
                            <span className='logo'>🌤️ WEATHER.IO</span>
                        </div>
                    </nav>

                    <main className='content-container'>{children}</main>

                    <footer className='global-footer'>
                        <p>© 2026 Weather App. Built with Next.js</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
