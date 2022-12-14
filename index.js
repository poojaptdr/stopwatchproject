let stopwatch = document.getElementById('stopWatch');
let sec = 0;
let min = 0;
let hr = 0;
let intervalId;

const startTimer = () =>{
     intervalId = setInterval(()=>{
        if(sec <59){
           sec++
        }else if(min >= 59){
            min = 0;
            hr++
        }

    let second = String(sec).padStart(2,'0');
    let minut =  String(min).padStart(2,'0');
    let hour =  String(hr).padStart(2, '0');

    stopwatch.innerText = (`${hour} : ${minut} : ${second}`)
    }, 1000)

}

const stopTimer = () => {
    clearInterval(intervalId)
 }

 const resetTimer = () =>{
    clearInterval(intervalId);
    sec = '00';
    min = '00';
    hr = '00';
     
    stopwatch.innerText = `${hr} : ${min} : ${sec}`
 }
