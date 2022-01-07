# 공부 내용 정리

css 초기화 코드 reset.css   
다른 css 연동하는 법
```css
@import "reset.css";
```

(12/29)

---
css 
border-radius 속성은 요소 테두리 경계의 꼭짓점을 둥글게 만들어 줍니다
```css
    border-radius:25px;
```
css
cursor 속성은 요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정합니다
```css
    /*키워드 값*/
    cursor:pointer;
    cursor:auto;
    
    /*URL, 대채용 키워드*/
    cursor: url(hand.cur),pointer;
    /* URL과 좌표 및 대체 키워드
    crsor: url(cursor1.png) 4 12, auto;
    cursor: url(cursor2.png) 2 2, pointer;

    /* 전역 값 */
    cursor: inherit;
    cursor: initial;
    cursor: unset;
```
css
flex-direction 속성은 플렉스 컨테이너 내의 아이템을 배치할 때 사용할
주축 및 방향(정방향,역방향)을 지정합니다
```css
    /* 한 줄의 글을 작성하는 방향대로 */
    flex-direction: row;

    /* <row>처럼, 대신 역방향 */
    flex-direction: row-reverse;

    /* 글 여러 줄이 쌓이는 방향대로 */
    flex-direction: column;

    /* <column>처럼, 대신 역방향 */
    flex-direction: column-reverse;

    /* 전역 값 */
    flex-direction: inherit;
    flex-direction: initial;
    flex-direction: unset;
```

css
margin-bottom 속성은 요소의 아래쪽에 바깥 여백 영역을 설정합니다.   
양수 값은 인접 요소와 거리를 넓히고 음수 값은 더 좁힙니다
```css
    /* <length> 값 */
    margin-bottom: 10px;  /* 절대 길이 */
    margin-bottom: 1em;   /* 글씨 크기에 상대적 */
    margin-bottom: 5%;    
    /* 가장 가까운 블록 컨테이너의 너비에 상대적*/

    /* 키워드 값 */
    margin-bottom: auto;

    /* 전역 값 */
    margin-bottom: inherit;
    margin-bottom: initial;
    margin-bottom: unset;
```

(2022/01/06)
paintbrush complete
---

code analyze
(2022/01/08)