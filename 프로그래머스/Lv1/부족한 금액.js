// function solution(price, money, count) {
//     // 처음타면 3원 count =1
//     // 두번째 타면 3*2 count =2 
//     // 세번째 타면 3*3 count =3 
//     // 토탈 - price  리턴
    
// //     let total = 0;
    
// //     for(let i=1; i<=count; i++){
// //         total = price * i 
// //     if(money < total) {
// //         return total-money;
// //     }
// //         else return 0;
// //     }
// //     return total;
// // }

// // console.log(solution(3,20,4))

function solution(price, money, count) {
    let totalPrice = 0;
    
    for(let i=1;i<=count;i++){
        totalPrice += price * i;
    }
    
    return money > totalPrice ? 0 : totalPrice-money
}
console.log(solution(3,20,4))