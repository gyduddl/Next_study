"use client"

import Button from "./Button";


type Props ={
    params:{
        location:string
    }
}

export default function detail({ params }:Props){
     const name = params.location === "seoul"? "서울": "";

    return(
        <>
        <h1>{name}의 3일 예보</h1>
        <Button/>
        </>
    )
}