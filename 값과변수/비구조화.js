// ✅ 비구조화

let box = {
    boxName : '사과박스',
    item : '사과'
}


let { boxName : a, item : b } = box;
// 위의 코드는 내가 쓰는 
// let { a, b } = box; 와 같다
// 생략된 문법을 써왓던거네

console.log(a);
console.log(b);