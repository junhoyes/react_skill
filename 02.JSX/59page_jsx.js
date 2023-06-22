import React ,{Component} from 'react';

class App extends Component{
    render(){
        const text=" 당신은 개발자 인가요?"
        const condition="true"

        return(
            <div>
                <h1>개발자님 안녕하세요?</h1>
                <h2>{text}</h2>
                {
                    condition ? '참' : '거짓'
                }
            </div>
        );
    }
}
export default App;