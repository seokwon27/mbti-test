# MBTI_TEST

> 무료 성격유형검사 서비스입니다.

## 📖 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [주요기능](#주요기능)
3. [개발기간](#개발기간)
4. [기술스택](#기술스택)
5. [와이어프레임](#와이어프레임)
6. [프로젝트 파일 구조](#프로젝트-파일-구조)
7. [Trouble Shooting](#trouble-shooting)
8. [소감한마디](#소감-한-마디)

## 프로젝트 소개

약식 테스트를 통해 자신이 성격유형이 16가지 유형중 어디에 속하는지 알아볼 수 있습니다.

> 공식 검사와 결과가 다소 다를 수 있습니다.

## 주요기능

#### 1. MBTI테스트

- **TEST** : 약 20개의 질문을 통해 약식으로 16개의 성격유형 중 자신이 해당하는 유형을 확인할 수 있다.

#### 2. JWT API 를 통한 로그인, 회원 가입, 프로필변경

- **Login** : 메인페이지 오른쪽 상단에 있는 '로그인' 버튼을 통해 로그인을 할 수 있다.
- **Register** : 로그인 페이지에서 '회원가입' 버튼을 통해 가입 페이지로 이동 할 수 있으며 계정 정보가 데이터베이스에 저장된다.
- **Profile** : 로그인 시 프로필 페이지에서 닉네임을 재설정 할 수 있다.

#### 3. 결과 페이지

- 테스트 결과를 Json-server에 저장하여 결과 페이지에서 리스트로 확인 가능하다.
- 자신의 결과는 비공개 토글버튼을 통해 나에게만 노출되도록 설정 가능하다.
- 결과 페이지에서 내 결과를 삭제할 수 있다.

## ⏲️ 개발기간

- 2024.09.09(월) ~ 2024.09.11(수)

## 📚️ 기술스택

### ✔️ Language

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

### ✔️ Version Control(버전관리)

Git을 이용한 분산버전관리(DVCS)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE(통합개발환경)

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Framework

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB),
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### ✔️ CSS

<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

## Trouble Shooting

### 1. 결과 페이지

- 기존 접근 방법 : 결과 데이터를 json-server에 저장할 때 데이터 객체 안에 결과 객체가 담긴상태로 저장
- 문제 : 결과페이지에서 결과 데이터를 불러와 사용할 때 의도한 데이터 구조와 달라서 데이터를 보여주지 못함
- 해결방법 : 데이터 저장시에 의도했던 구조로 저장되도록 수정.

상세과정:https://record165.tistory.com/27

## 소감

#### 좋은점

- axios와 jwt api 를 직접 활용해보는 기회를 통해 사용법이 익숙해질 수 있었다.
- 서버와 통신하는 과정에 대해 이해할 수 있었고, 이를 통해 프론트에서 서버로부터 받는 응답을 확인하는 법을 알게 되었다.
- tailwindcss 를 사용하여 기존의 보다 편리한 디자인이 가능해졌다.

#### 개선점

- 기능은 만들었지만 질문의 개수와 결과 신뢰도가 낮다.
- 로그인 상태를 props drilling 으로 관리하고 있기 때문에 유지 보수가 어려울거 같다.
- 로그인 정보를 확인할 때 최초 로그인시 받은 데이터를 상태에 저장하여 관리하기 때문에 서버와의 괴리가 있을 수 있다.
- 기본적인 ui만 건드려서 ux가 좋지 않다고 느껴진다.
