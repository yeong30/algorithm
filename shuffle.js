

//Fisher-Yates shuffle -mordern
function shuffle(arr) {
    for(let i= arr.length-1 ; i>0; i--){
        let randomIndex= Math.floor(Math.random() * (i + 1));
      
        console.log(`${i} : ${randomIndex}`);
        [arr[i],arr[randomIndex]] = [arr[randomIndex],arr[i]];
      }
  }
  
  // 1, 2, 3으로 만들 수 있는 모든 순열의 빈도세기
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  console.log(count);
  

// 숫자뽑기
let candidate = [1,2,3,4,5,6,7,8,9];
let chosenNum = [];
// 숫자 4개
for (let i = 0; i < 4; i++) {
// 1 - 9까지 랜덤한 숫자 빼주기, splice() 0-8번째 index
	let fourNum = [];
    fourNum = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    chosenNum.push(fourNum);
  }
 console.log(chosenNum);
 console.clear();
