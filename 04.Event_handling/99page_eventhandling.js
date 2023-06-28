import React, {Component} from 'React';

class EventPractice extends Component{
    state={
        message:''
    }
    
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                />
                <button onClick={
                    () =>{
                        alert(this.state.message);
                        this.setState({
                            message:''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}
export default EventPractice;