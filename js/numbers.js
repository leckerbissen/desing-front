let numbersElem = document.querySelectorAll('.benefits__numbers span');

let updateNumbers = function onScroll(){
    let numberTop = numbersElem[0].getBoundingClientRect().top;
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > numberTop - window.innerHeight / 2) {
            window.removeEventListener('scroll', onScroll);

        }
        numbersElem.forEach(elem => {
            console.log(elem)
            let start = +elem.innerHTML;
            let end = +elem.dataset.max;
            if (start < end) {
                let interval = setInterval(function() {
                    elem.innerHTML = ++start;
                    if(start === end) {
                        clearInterval(interval);
                    }
                }, 20);
            }
        })
    })
}

updateNumbers()