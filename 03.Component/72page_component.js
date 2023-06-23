import React, from 'react';{ Component } from "react";

class App extends Component{
    render(){
        return(
            <div>
                안녕하세요 제 이름은 {this.prop.name}입니다. 
            </div>
        );
    }
}

export default App;