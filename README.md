# Naver Reservation Clone Project

이 프로젝트는 네이버의 예약 시스템 기능을 클론해서 만든 프로젝트입니다.

## How to Install

```bash
// fork or clone project
cd <projectName>
npm install
npm run serve
```

## Motivation

## Tech / Framework used

### **Built with**

- front : Vue / Vuex / Router / Vuetify
- back : Spring

## Features

## Contact

**front** 김민수 : _Minsoo Kim_  
**https://github.com/Minsoo-web**

**back** 박호성 : _HoSeong Park_  
**https://github.com/hoseongPark**

## Update Log

### 0.0.0 update

- start : 프로젝트 시작
- vuetify 추가
- 라우팅 설정 및 섹션 컴포넌트 구성
- 로그인 페이지 구성

### 0.1.0 회원가입 / 로그인 구현

- CORS 에러 해결
- 회원 가입 후 로그인 페이지 이동
- 페이지 이동 후 이메일 자동 완성
- 로그인 후 마이페이지 이동
- 모든 창 이동시 (새로고침 포함) 토큰 여부를 따진 뒤  
  토큰이 있다면 회원 조회 API를 통해 로그인 상태를 유지
