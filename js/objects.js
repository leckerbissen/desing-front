let wrapObjs = [
        {
                wrap: document.querySelector('.first-wrap'),
                images: "<img class='banner__img-1' src='./js/images/firstscreen-1.png'></img><img class='banner__img-2 animated' src='./js/images/firstscreen-2.png'></img><img class='banner__img-3' src='./js/images/firstscreen-3.png'></img><img class='banner__img-4 animated' src='./js/images/firstscreen-4.png'></img>"
        },

        {
                wrap: document.querySelector('.services'),
                images: "<img class='services__img-1' src='./js/images/service-1.png'></img><img class='services__img-2 animated' src='./js/images/service-2.png'></img>"
        },

        {
                wrap: document.querySelector('.about'),
                images: "<img class='about__png-1 animated' src='./js/images/about-1.png' /><img class='about__png-2 animated' src='./js/images/about-2.png'/>"
        },

        {
                wrap: document.querySelector('.portfolio'),
                images: "<img class='portfolio__png-1' src='./js/images/portfolio-1.png' /><img class='portfolio__png-2' src='./js/images/portfolio-2.png' />"
        },

        {
                wrap: document.querySelector('.capture'),
                images: "<img class='capture__png-1 animated' src='./js/images/capture-1.png' /><img class='capture__png-2' src='./js/images/capture-2.png' /><img class='capture__png-3 animated' src='./js/images/capture-3.png' />"
        },

        {
                wrap: document.querySelector('.process'),
                images: "<img class='process__png-1 animated' src='./js/images/process-1.png' /><img class='process__png-2 animated' src='./js/images/process-2.png' />"
        },

        {
                wrap: document.querySelector('.article'),
                images: "<img class='article__png-1' src='./js/images/article-1.png' /><img class='article__png-2' src='./js/images/article-2.png' />"
        },

        {
                wrap: document.querySelector('.contacts__wrap'),
                images: "<img class='contacts__png-1' src='./js/images/contacts-1.png' /><img class='contacts__png-2' src='./js/images/contacts-2.png' /><img class='contacts__png-3' src='./js/images/contacts-3.png' />"
        }

]

const addImage = () => {
        wrapObjs.forEach(elem => {
                elem.wrap.insertAdjacentHTML('afterbegin', elem.images)
        })
}

addImage();


let scrollRotate = window.addEventListener("scroll", () => {
        let scrollObjects = document.querySelectorAll(".animated");
        scrollObjects.forEach(elem => {
                elem.style.transform= "rotate(" + window.pageYOffset/2 + "deg)";
        })
});