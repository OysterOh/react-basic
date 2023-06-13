import React from "react";

//컴포넌트
//컴포넌트 파일은 대문자로 작성하는 것이 관례이다
function SayHello(props) {
    return (
        <div>
            <p>hi</p>
            {props.children} <br></br>
            <span>hello</span>
        </div>
    );
}

export default SayHello;