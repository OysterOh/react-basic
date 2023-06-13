import React from 'react'
import FoodItem from './FoodItem'
import SayHello from '../../SayHello'

const FoodList = () => {
  //fetch를 통해 서버에서 음식 목록을 json으로 받아온다.
  const food = {
    id: 11990,
    foodList : [
        {
            fName: '짜장면',
            price: 6000,
            id: 'chinese'
        },
        {
            fName: '해물파전',
            price: 12000,
            id: 'korean'
        },
        {
            fName: '가츠동',
            price: 8000,
            id: 'japanese'
        },
        {
            fName: '깐풍육',
            price: 26000,
            id: 'chinese'
        }
    ]
  }
    return (
    <ul>
        {/*<FoodItem foodName='짜장면' price={6000} foodId='chinese'/>
        <FoodItem foodName='해물파전' price={12000} foodId='korean'/>
        <FoodItem foodName='가츠동' price={8000} foodId='japanese'/>*/}     

        <SayHello>
            <a href='https://www.naver.com'>naver</a>
        </SayHello>
        <SayHello>
            <a href='https://www.google.com'>google</a>
        </SayHello>

        {
            food.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id}/>)
        }
    </ul>
  )
}

export default FoodList