import React, {useState} from 'react'

const NickName = () => {
  
    //useState 훅은 배열을 리턴한다
    //0번에는 상태변수값, 1번에는 상태변수값을 변경할 수 있는 setter함수 제공된다
    
    //useState의 리턴타입이 배열이기 때문에 구조 분해 할당을 통해 
    //쉽게 이름을 지어서 사용 가능 [관례식으로 상태변수값, set상태변수값]
    const [nickName, setNickName] = useState('김철수');
                                            //기본값
    //console.log('result: ', result);

    //let nickName = '김철수';

    const changeNickname = e => {
        console.log('changeNickname called');
        //nickName = '오정원';
        setNickName('척척박사');
        console.log('nickName: ', nickName);
    }
    return (
    <>
        <h1>Hello! {nickName}</h1>
        <button className='btn' onClick={changeNickname}>button</button>
        <button className='btn' onClick={() => setNickName('으악')}>button2</button>
    </>
  );
}

export default NickName;