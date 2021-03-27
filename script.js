/* Initializing counter */
let count = 0

// selecting buttons using btn class and value using id selector 
const value = document.querySelector('#value');
const Buttons = document.querySelectorAll('.btn');

Buttons.forEach(function (btn) {
    btn.addEventListener('click', function (viewClass) {
        const classList = viewClass.currentTarget.classList;
        if (classList.contains('decrease')) {
            count--;
            console.log(count);
        }
        value.textContent = count;
        if (classList.contains('reset')) {
            count = 0;

        }
        value.textContent = count;
        if (classList.contains('increase')) {
            count++;
        }
        if (count === 0) {
            value.text.color = "black";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        

    }); 
    
});
