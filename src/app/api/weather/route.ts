import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${q}&lang=ko`);
    const data = await res.json();

    return NextResponse.json(data);
}
