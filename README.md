# 📁 포트폴리오 프로젝트

React와 TypeScript 기반으로 개발한 개인 포트폴리오입니다.
프로젝트 및 경력 정보를 카드 형태로 깔끔하게 보여주는 UI/UX 중심의 웹 애플리케이션입니다.

## 🛠 기술 스택

- ⚛️ React
- 🟦 TypeScript
- 💅 styled-components

## ✨ 주요 기능

1. 프로젝트/경력 카드 리스트

- 프로젝트 및 경력 정보를 카드 형태로 출력
- 카드 구성 요소: 아이콘, 제목, 설명, 태그, 외부 링크 등

2. 무한 스크롤 (점진적 로딩)

- 초기 4개 카드 표시 → 스크롤 시 2개씩 추가 로딩
- Intersection Observer 기반의 자연스러운 등장 애니메이션

3. 반응형 디자인

- PC: 카드 2개씩
- 모바일: 카드 1개씩
- styled-components의 theme breakpoints 활용한 반응형 레이아웃

4. 태그별 컬러 테마

- 각 태그(HTML, CSS, REACT 등)에 맞는 자동 색상 매핑
- enum (EThemeTag) 및 theme.tagColors로 타입 안전성 확보

5. 스타일링 전략

- 주요 스타일은 styled-components 사용
- 공통 유틸 스타일(예: flex-center)은 SCSS mixin으로 관리

6. 데이터 분리

- /data/project.json 등 외부 JSON 파일에서 프로젝트/경력 정보 로딩

7. UI/UX 개선

- 카드 등장 애니메이션
- 명확한 태그 컬러 시스템
- 깔끔하고 현대적인 레이아웃 구성

## 부가 기능/구조

- TypeScript로 타입 검증
- 불필요한 코드 정리 및 리팩토링 완료
