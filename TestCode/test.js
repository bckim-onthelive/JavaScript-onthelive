// 객체를 품은 배열에서 조건문에 해당하는 값에 불린값을 출력

let userList = [
    {name: "mike", age: 30},
    {name : "jane", age : 27},
    {name : "Tom", age : 10},
];

const result = userList.find((user)=>{
    if (user.age < 19) {
        return true;
        console.log("조건문");
    }
    return false;
    console.log("결과값");
});

console.log(result);