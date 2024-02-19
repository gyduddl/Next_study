'use client'

import { useRouter } from "next/navigation";
 // 이렇게 클라이언트 컴포넌트를 사용해야 하는 페이지를 따로 빼주어 상세 페이지가 무작정 상세페이지가 되는 것을 막을 수 있다. 
const Button=()=>{
    const router = useRouter()
    const handleClick = ()=>{
        router.push('/')
    }
    return <button onClick={handleClick}>홈으로</button>
}

export default Button