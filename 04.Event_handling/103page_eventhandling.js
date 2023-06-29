import React, {Component} from 'React';

class EventPractice extends Component{
    state={
        username:'',
        message:''
        
    }

    handleChange = (e) => {
        this.setState({
            username:'',
            message:''

        });
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="입력 해주세요"
                    value={this.state.message}
                    onChange={this.handleClick}
                />
                <button onClick={this.handleChange}>확인</button>
            </div>
        );
    }
    
}

export default EventPractice;    