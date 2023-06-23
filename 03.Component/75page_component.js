import React, from 'react';{ Component } from "react";

class MyComponent extends Component{
    static defaultProps={
        mame:'이순신'
    }
    render(){
        return(
            <div>
                안녕하세요 제이름은 {this.props.name}입니다.
            </div>

        );
    }
}

export default MyComponent;