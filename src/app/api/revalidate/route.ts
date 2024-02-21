import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const tag = req.nextUrl.searchParams.get('tag');
    //tag가 없다면 
    if(!tag) throw new Error('태그는 필수입니다.')
    //tag가 있다면 revalidateTag함수를 불러온다.
    //해당 태그가 달려있는 fetch 요청을 재검증 해주는 것이다.
    revalidateTag(tag)
    //재검증하는데 성공했다면 NextResponse에 
    //메세지랑 어떤 태그를 재검증 했는지 알아야 하니 tag도 넣어서 보내준다.
    return NextResponse.json({message:"재검증에 성공했습니다.", tag})
}