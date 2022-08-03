//arr.map()
// user 배열을 복제하고 새로운 키, 밸류를 추가함.

let userList = [
    { name: "Mike", age: 30},
    { name: "Jane", age: 27},
    { name: "Tom", age: 10},
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index +1,  
        isAdult: user.age > 19,
    });
});

//user를 병합하고 새로운 프로퍼티를 준다?

console.log(newUserList);