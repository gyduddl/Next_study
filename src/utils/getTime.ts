export interface Response{
    "year": 2020,
    "month": 12,
    "day": 13,
    "hour": 9,
    "minute": 30,
    "seconds": 17,
    "milliSeconds": 0,
    "dateTime": "2020-12-13T09:30:17",
    "date": "13/12/2020",
    "time": "09:30",
    "timeZone": "America/Los_Angeles",
    "dayOfWeek": "Sunday",
    "dstActive": false
  }


export const getTime = async(timeZone:string) : Promise<Response>=>{
    const res = await fetch(
        `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
        {next : {tags:[
            'time',
        ]}}
      )
    
      if(!res.ok){
        if(!res.ok) throw new Error("시간 정보를 가져올 수 없습니다.")
      }
    
      return res.json()
}

// next.js에서는 fetch의 결과값을 자동으로 캐싱한다.
//날씨 데이터가 30분마다 갱신되기 때문에 즉시 캐시가 풀렸다는 것을 확인이 어려워서 현재 시간을 response 받아오는 api 사용