import { Component, Fragment } from "react";
import React {Component}from 'react';

class App extends Component{
    render(){
        return(
            <h1>리엑트 안녕?! </h1>
            <h2>리엑트 왜 인사 안해?</h2>
        );
    }
}
/*
이런 형태의 코드는 제대로 작동하지 않습니다. 코드를 저장한 후 웹 브라우저나 개발 서버를 실행했던 터미널을 열어 보세요. 다음 오류가 나타날 것입니다.

Failed to compile.
 
./src/App.js
Line 6:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
 
4 |   return (
5 |     <h1>리액트 안녕!</h1>
> 6 |     <h2>잘 작동하니?</h2>
  |     ^
7 |   )
8 | }
9 |
*/

//요소 여러 개가 부모 요소 하나에 의하여 감싸져 있지 않기 때문에 오류가 발생했습니다. 이 오류는 다음과 같이 코드를 작성하여 해결할 수 있습니다. 
export default App;

//app.js의 매서드
render(){
    return(
        <h1>리엑트 안녕?! </h1>
        <h2>리엑트 왜 인사 안해?</h2>
    );
}
//리액트 컴포넌트에서 요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 할까요? 그것은 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다.


//Fragment
import { Component } from "react";
class App extends Component{
    render(){
        <Fragment>
            <h1>리엑트 안녕?! </h1>
            <h2>리엑트 왜 인사 안해?</h2>     
        </Fragment>
    }
}
export default App;



//Fragment는 다음과 같은 형태로도 표현할 수 있습니다.
import React from 'react';
 
function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
 
export default App;
