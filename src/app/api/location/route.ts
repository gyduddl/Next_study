import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    if (!lat || !lon) {
        return NextResponse.json({ error: '좌표가 필요합니다.' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`, {
            headers: {
                Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
            },
        });

        const data = await response.json();
        const address = data.documents[0]?.address_name || '위치 정보 없음';

        return NextResponse.json({ address });
    } catch (error) {
        return NextResponse.json({ error: '카카오 API 호출 실패' }, { status: 500 });
    }
}
