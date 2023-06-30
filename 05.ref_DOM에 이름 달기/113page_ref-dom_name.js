import React, {Component} from 'React';
import './113page_ref-dom_name.css';

class EventPractice extends Component{
    state={
        password:'',
        click:false,
        validated:false        
    }


    handleChange = (e) => {
        this.setState({
            password:e.target.value
        });
    }

    handleButtonClick=() => {
        this.setState({
            clicked:true,
            validated:this.state.password === '0000'
        })
    }

    render(){
        return(
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') :'' }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
    
}

export default validationSample;