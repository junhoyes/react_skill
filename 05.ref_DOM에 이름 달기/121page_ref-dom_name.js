import React, {Component} from 'react';

class  App extends Component{
    ScrollToBottom =() =>{
        const{ scrollHeight, clientHeight } =this.box;
        /*
            앞 코드에는 비구조화 할당 문법을 사용했다.
            다음 코드와 같은 의미이다.       
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.cliengHeight;
        */
       this.box.ScrollTop = scrollHeight -clientHeight;
    }

    render(){
        //(...)
    }
}
 
export default ScrollBox;