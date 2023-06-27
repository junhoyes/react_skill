import React, {Component} from 'React';

class EventPractice extends Component{
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="입력해주세요"
                onChange={
                    (e) => {
                        console.log(e);
                    }
                }
                />
            </div>
        );
    }
}