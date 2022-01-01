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
(2022/01/01)