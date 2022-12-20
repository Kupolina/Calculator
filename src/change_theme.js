export default document.querySelector('.calc__theme').onclick = function () {
    document.querySelector(".calc").classList.toggle('white');
    document.querySelector(".calc__theme").classList.toggle('white');
    document.querySelector(".calc__screen p").classList.toggle('white');
    document.querySelector(".theme__changer").classList.toggle('white');

    let buttonList = document.querySelectorAll(".calc__button");
    for(let i = 0; i < buttonList.length; i++){
        buttonList[i].classList.toggle('white');
    }
}

