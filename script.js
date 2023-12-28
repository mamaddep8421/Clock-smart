const selectmenu = document.querySelectorAll('select');

const setAlarmBtn = document.querySelector('button');

const time  = document.querySelector('.time');

const rington = new Audio('./file/ringtone.mp3');

const content = document.querySelector('.content');

let alarmTime , alarmstate = 'no set';

for( let i = 23 ; i >= 0; i--){
    i = i < 10 ? '0' + i : i;
    let options = `<option value="${i}">${i}</option>`
    let result = selectmenu[0].firstElementChild.insertAdjacentHTML('afterend',options);
}

for( let i = 59 ; i >= 0; i--){
    i = i < 10 ? '0' + i : i;
    let options = `<option value="${i}">${i}</option>`
    let result = selectmenu[1].firstElementChild.insertAdjacentHTML('afterend',options);
}

setInterval(() =>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    //=======================================
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    // console.log(`${h},${m},${s}`);
    time.innerHTML = `${h}:${m}:${s}`;
    if(alarmTime ==  `${h}:${m}`){
        rington.play();
        rington.loop = true;
    }
},1000)

setAlarmBtn.addEventListener('click', () => {
    alarmTime = `${selectmenu[0].value}:${selectmenu[1].value}`
    // alert(`ساعتی که انتخاب کردی تا زنگ بخوره برات => ${h}:${m}`)
    // console.log(alarmTime);
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
        return alert('ساعت هشدار رو به درستی مشخص کن یک جایی رو اشتباه کردی😐')
    }
    // content.classList.add('disable');
    // setAlarmBtn.innerHTML = 'clear alarm';
    checkstate(alarmstate);
})
function checkstate(state){
    if(state == 'no set'){
        content.classList.add('disable');
        setAlarmBtn.innerHTML = 'clear alarm';
        alarmstate = 'set';
    }else{
        content.classList.remove('disable');
        alarmTime = '';
        rington.pause();
        alarmstate = 'no set';
        setAlarmBtn.innerText = 'Set Alarm';
    }
}
