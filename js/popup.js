let popupFunc = () => {
    let popupOpenBtn = document.querySelectorAll('.popup-btn');
    let popupCloseBtn = document.querySelector('.popup-close');
    let popup = document.querySelector('.popup');
    
    popupOpenBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.classList.toggle('active');
        });
    })
    
    popupCloseBtn.addEventListener('click', () => {
        popup.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if(e.target === popup) {
            popup.classList.remove('active');
        }
    });
}

popupFunc();