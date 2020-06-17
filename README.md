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

### 0.1.1 컴포넌트 설계 / MyPage UI 설계

- Nav 상세 디자인
- Modal 컴포넌트 작성 및 스타일링

### 0.1.2 Mypage Edit

- 회원정보 수정 라우터 설계
- 라우터 뷰에 따른 views 컴포넌트 생성
- 반복되는 컴포넌트 아토믹하게 분류
- API 연동 직전의 `mutations` 와 `actions` 작성
- 디자인은 `instagram`의 회원정보 수정 페이지를 참조하였습니다.

### 0.2.0 회원정보 수정

- 회원정보 수정 API 연동
  `close` # 6
- 회원 비밀번호 수정 API 연동
  `close` # 7

### 0.2.1 AWS S3 배포

- http://vue-github-action.s3-website.ap-northeast-2.amazonaws.com/
- Github Action 을 사용해 CI/CD 를 구축

### 0.2.2 Owner 권한 상승 API 연동

