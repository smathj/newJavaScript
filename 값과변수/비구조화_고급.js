// ✅ 고급 비구조화

let item = {
    water : '삼다수', 
    smallBag : { snack : '썬칩', money : '만원' }
}

// 아이탬에서 "만원" 을 꺼내오자
// let anyMoney = item.smallBag.money 와 같다
let { smallBag : { money : anyMoney} } = item;

console.log(`anyMoney = ${anyMoney}`)




// 더 복잡하게!
item = {
    water : { 
        smallBag : { snack : '썬칩', money : '만원' }
    }
}

// let anyMoney2 = item.water.smallBag.money 와 같다
let { water : {smallBag : { money : anyMoney2} } } = item;

console.log(`anyMoney2 = ${anyMoney2}`)



let field = 'Age'
let harry = { age : 10 }
let { [field.toLocaleLowerCase()]: harrysAge } = harry

console.log(`harrysAge = ${harrysAge}`)