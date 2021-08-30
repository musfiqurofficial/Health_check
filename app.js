// let counter = document.querySelector('.counter');

// let count = 1;
// setInterval(() => {
//     if (count < 75){
//         count++;
//         counter.innerText = count;
//     }
// }, 1);

let counters = document.querySelectorAll('.counter');
let time = 300;

counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data-target')
        let count = +counter.innerText;

        let incrm = target / time;
        
        if (count < target){
            counter.innerText = Math.ceil(count + incrm);
            setTimeout(updateCount, 1);
        } else{
            counter.innerText = target;
        }
    };
    updateCount();
});

let healthCondision = document.querySelector('.health');

setTimeout(() => {
    healthCondision.innerText = "Your Health Is Good!"
}, 2000);