var a{
    <div>
        <h1>Awsome <b>react</b></h1>
    </div>
}

//바벨로 변환
var a = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "awsome",
        React.createElement(
            'b',
            null,
            "React"
        )
    )
)

