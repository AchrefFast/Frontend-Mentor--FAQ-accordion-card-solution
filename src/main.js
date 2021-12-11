
function main() {

    const details = document.querySelectorAll('details');
    details.forEach(elm => {
        elm.addEventListener('click', () => {
            details.forEach(question => {
                if (question.hasAttribute('open') && elm != question) {
                    question.removeAttribute('open');
                }
            })
        })
    });
}

window.addEventListener('DOMContentLoaded', main);

//=======================================Without details element===========================//

// I used this when I build the question section without the "details" tag.
// By using the details element I didn't need the mechanisem of opening and closing the question anymore.
// This code will be needed to create the hide/show action of the questions.

// function main() {
//     const answers = document.querySelectorAll('.question__q');
//     answers.forEach(elm => {
//         elm.addEventListener('click', (e) => {
//             const parent = elm.parentElement;
//             const arrow = parent.firstElementChild.lastElementChild;
//             arrow.classList.toggle('flip');
//             elm.classList.toggle('bold');
//             console.log(arrow);
//             parent.lastElementChild.classList.toggle('appear');
//         });
//     });
// }

// window.addEventListener('DOMContentLoaded', main);