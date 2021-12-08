
function main() {
    const answers = document.querySelectorAll('.question__q');
    answers.forEach(elm => {
        elm.addEventListener('click', (e) => {
            const parent = elm.parentElement;
            const arrow = parent.firstElementChild.lastElementChild;
            arrow.classList.toggle('flip');
            elm.classList.toggle('bold');
            console.log(arrow);
            parent.lastElementChild.classList.toggle('appear');



        });
    });
}




window.addEventListener('DOMContentLoaded', main);