import React,{ Component } from "react";
import React,{ Component } from 'prop-types'

class MyComponent extends Component{
    state defaultProps={
        name:'기본이름'
    }
    
    static propTypes={
        name:this.propTypes.string, //name props 타입을 문자로 설정한다.
        age:propTypes.number.isRequired //필수적으로 존재해야 하며 숫자이다.
    }
    
    render(){
        return(
            <div>
                <P>안녕하세요 제이름은 {this.props.name} 입니다.</P>
                <p>저는 {this.props.age}살 입니다.</p>
            </div>
        )
    }
}

export default MyComponent;

