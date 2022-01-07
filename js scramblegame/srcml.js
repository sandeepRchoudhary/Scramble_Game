const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
const guess = document.querySelector('input');
let play = false;//this code will allow to play the game
let newsWords="";//this will use to bring the word into the puzzle part
let randWords="";//this variable will use to display the random puzzled name to guess
let sWords=['c++','java','javascript','ruby','python','.net','html','css','reactjs','angularjs','nodejs','mysql','mongodb',]

const createNewWords=()=>{
    let ranNum=Math.floor(Math.random()* sWords.length);//this loc will return the index number randomly
    let newTempWords=sWords[ranNum];//we make an variable to store the array's value instead of index number
    return newTempWords;//here we returned that variable
}
//this code is to puzzled the words
const scrambleWords=(arr)=>{
    for(let i=arr.length-1;i>=0;i--){
        let temp=arr[i]; 
        let j=Math.floor(Math.random()*(i+1));
        
        arr[i]=arr[j];
        
        arr[j]=temp;
    
    }
    return arr;
}
btn.addEventListener('click', function () {//this loc is used to fire the event on button using anonymous function
    if (!play) {//we put !play because if i dont put ! this code will already started the game and shows the result as"EXCELLENT IT'S CORRECT"
        play = true;//this code will show the current result and then put the next puzzled word infront
        btn.innerHTML = "Guess";//once you click on the button u will get "guess" word on the button
        guess.classList.toggle('hidden');//this loc will hide/show the input box
        newsWords=createNewWords();
        randWords=scrambleWords(newsWords.split("")).join("");
        msg.innerHTML=`Guess the programming language: ${randWords}`;
    }else{
        let tempWords=guess.value;
        if(tempWords===newsWords){
            play=false;
            msg.innerHTML=`EXCELLENT IT'S CORRECT ${newsWords}`;
            btn.innerHTML=`Guess the next word`;
            guess.classList.toggle('hidden');
            guess.value="";
        
        }else{
            msg.innerHTML=`SORRY ITS INCORRECT, PLEASE TRY AGAIN ${randWords}`;
            alert("Your guess is wrong you can try again!!");
        }
    }
});
