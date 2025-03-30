# 📌 프로젝트 개요
"아무말 대잔치" 커뮤니티 프로젝트
vanilla.js로 spa를 구현하며 성능 향상을 위해 부분렌더링을 구현하였습니다.

### 🔗 백엔드 레포지토리 링크
https://github.com/100-hours-a-week/2-daisy-kim-week6-backend

### 🔗 프론트엔드 리액트 마이그레이션 레포지토리 링크
https://github.com/100-hours-a-week/2-daisy-kim-week6-frontend

### 🛠️ 기술 스택
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

<br>

# 📌 결과 영상
https://github.com/user-attachments/assets/2e62818c-5f6f-40b9-86c0-2d574c100834

<br>

# 📌 회고
### 1. spa 구현
vanilla.js의 경우 정적 렌더링을 지원하며 새로운 페이지에 접속할 때마다 새로운 dom을 생성합니다.<br>
spa를 구현함으로써 리액트의 csr을 구현할 수 있었습니다.<br>
dom에 대해 한 층 더 이해할 수 있는 프로젝트였습니다.<br>
또한 리액트에서 `npx create-react-app`을 통해 생성되는 `index.js`의 코드를 완전히 이해할 수 있었습니다.<br>

### 2. 부분 렌더링과 v-dom
v-dom을 구현하지 못한 것이 아쉽습니다.<br>
v-dom의 목적이 메모리 효율과 성능 향상을 위해 동일한 페이지에서 부분적으로 dom을 업데이트하는 것이기 때문에<br>
api 호출에 따라 일부만 변경될 때 해당 컴포넌트만 재렌더링하는 것도 비슷할 수 있겠다고 생각하였습니다.<br>
v-dom을 구현하기 위해 js 파일의 innerHTML 형식을 전부 객체 형태로 바꾸거나 모든 요소에 대해 객체로 변환할 수 있는 코드를 별도로 구현해야 합니다.<br>
spa를 위해 이미 html파일을 js로 리팩토링하였기 때문에 한 번 더 프로젝트 전체를 리팩토리하는 것은 시간적으로 불가능하다 판단하였습니다.<br>
하지만 댓글 작성 시 부분 렌더링을 성공하였습니다.<br>
이는 v-dom과 목적에 있어 유사하다고 생각하기 때문에 여기서 프로젝트를 마무리하려 합니다.
