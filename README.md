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
* **App Router:** 최신 Next.js 구조를 채택하여 효율적인 라우팅을 구현했습니다.
* **Server-side API Route:** 카카오 REST API 키 보안을 위해 서버 사이드에서 API를 호출하고 클라이언트에 정제된 데이터만 전달합니다.

---

## 🛠 Tech Stack (기술 스택)

| Category | Tech |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **State/Data** | React Hooks, Fetch API |
| **Styling** | CSS Modules, Framer Motion (Transitions) |
| **Deployment** | Vercel |

---

## 💡 Troubleshooting (문제 해결)

### **[Issue] 해외 API의 지명 데이터 불일치 및 보안 문제**
* **현상:** 브라우저 좌표를 Weather API에 직접 전달 시, 한국 사용자에게 어색한 영문 지명이 노출됨. 또한 클라이언트 코드에 API 키가 노출될 위험이 있음.
* **해결:** 1. Next.js의 **Route Handler(`app/api/location/route.ts`)**를 구축하여 API 키를 서버 환경 변수(`.env`)로 격리.
  2. 카카오 로컬 API를 서버에서 호출하여 좌표를 한글 주소로 변환하는 **Reverse Geocoding** 로직 구현.
  3. 두 API의 응답을 조합하여 신뢰도 높은 위치 정보와 기상 데이터를 동시에 제공함.

---

## 📂 Project Structure
```text
src/
 ├── app/
 │    ├── api/          # Kakao & Weather API Route Handlers
 │    ├── forecast/     # [location] 기반 다이나믹 라우트 (상세 차트)
 │    └── layout.tsx    # Root Layout & Metadata (Viewport) 설정
 ├── components/        # HourlyChart, WeatherCard 등 공통 컴포넌트
 └── utils/             # Fetching logic 및 데이터 포맷터
