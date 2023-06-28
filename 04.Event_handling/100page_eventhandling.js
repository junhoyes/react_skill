import React, {Component} from 'React';

class EventPractice extends Component{
    state={
        Message:''
    }

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            Message:e.target.value
        });
    }
    handleClick(){
        alert(this.state.Message);
        this.setState({
            Message:'' 
        });
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
            </div>
            <input
                type="text"
                name="message"
                placeholder="입력해주세요."
                value={this.state.Message}
                onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>확인</button>
        )
    }
}
export default EventPractice;