//rafce
import React from 'react'

const ClickEvent = () => {

    const greeting = e => {
        alert('안녕 친구');
    }

    const changeBox = e => {
        const $box = document.querySelector('.box');
        $box.style.background = 'skyblue';
        $box.style.width = '200px';
        $box.style.height = '200px';

    }

  return (
    <>
        <button id='btn1' onClick={ () => alert('nice click son')}>CLICK!</button>
        <button id='btn2' onClick={greeting}>CLICK2!</button>
        <button id='btn3' onMouseOver={changeBox}>CLICK3!</button>

        <div className='box'></div>
        
    </>
  )
}

export default ClickEvent