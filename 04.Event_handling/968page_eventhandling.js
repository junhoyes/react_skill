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
                type="text"
                name="message"
                placeholder="입력해주세요"
                value={this.state.message}
                onChange={ 
                    (e) => {
                        this.setState({
                            message: e.target.value
                        })
                    }
                }
                />
            </div>
        );
    }
}
export default EventPractice;