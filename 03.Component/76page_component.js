import React,{ Component } from "react";
import React,{ Component } from 'prop-types'

class MyComponent extends Component{
    (...)
}

MyComponent.propTypes ={ 
    name:propTypes.string //name prop 타입을 문자열로 설정한다.

}
 
export default MyComponent;


//transform-class-properties 문법 사용

import React{Componen} from "react";

class MyComponent extends Component{
    static defaultProps{
        name:'기본이름'
    }

    static propTypes={
        name:propTypes.string //name props 타입을 문자열로 설정한다.
    }
}
