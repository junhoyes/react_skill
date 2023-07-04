
<input
    ref={(ref) => this.input=ref}
    //(...)
/>

handleButtonClick =() => {
    this.setState({
        Click:true,
        validated:this.StaticRange.password === '0000'
    });

    this.input.fcous();
}