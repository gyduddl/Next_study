# 🌦️ Global Weather Dashboard
> **Next.js 14+ 기반의 실시간 위치 정밀 기상 정보 대시보드** > 사용자의 현재 위치를 추적하여 실시간 날씨와 시간대별 기온 추이를 시각화합니다.

---

## 🚀 Deployment & Docs
* **Live Demo:** [https://next-study-ten-silk.vercel.app/](https://next-study-ten-silk.vercel.app/)
* **Study Records:** [Velog - Next.js 페이지 구성하기](https://velog.io/@st4889/Next.js-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0)

---

## ✨ Key Features (주요 기능)

### 1. 📍 API 조합을 통한 위치 정밀화 (Reverse Geocoding)
* 해외 기상 API(`WeatherAPI`)의 한국 지명 데이터 부정확성(예: 'Monnae' 등 생소한 명칭 반환) 문제를 발견.
* 이를 해결하기 위해 `Kakao Local API`를 결합하여 **"수원시 영통구"**와 같은 정확한 한국 행정 구역 명칭을 제공합니다.

### 2. 📊 데이터 시각화 (Charts)
* `Chart.js`를 활용하여 24시간 기온 추이를 직관적인 라인 차트로 구현했습니다.
* 상세 페이지(`Dynamic Routing`)를 통해 더 깊이 있는 기상 데이터를 확인할 수 있습니다.

### 3. ⚡ Next.js 최적화 아키텍처
* **App Router:** 최신 Next.js 구조를 채
