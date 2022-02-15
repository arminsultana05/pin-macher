function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;

    }
    return getPin();


}

function generatPin() {
    const pin = getPin();
    document.getElementById('display-input').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');

    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {

        const previousnumber = calcInput.value;
        const newCalc = previousnumber + number;
        calcInput.value = newCalc;

    }

})

function veryfyPin() {
    const randomButton = document.getElementById('display-input').value;
    const macherButton = document.getElementById('calc-input').value;
    const notyfySuccess = document.getElementById('notify-succes');
    const notifyfailed = document.getElementById('notify-failed');
    if (randomButton == macherButton) {


        notyfySuccess.style.display = 'block';
        notifyfailed.style.display = 'none'
    } else {

        notifyfailed.style.display = 'block'
        notyfySuccess.style.display = 'none';
    }
}