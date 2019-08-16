function calculate() {
    let inputNum = document.getElementById("InputNum").value;
    let result;
    if (inputNum > 18 || inputNum < 1 || inputNum % 1 !== 0) {
        result = 'Error: Please enter an integer between 1 and 18!';
    } else {
        for (i = inputNum - 1; i >= 1; i--) {

            result = inputNum * i;
            inputNum = result;

        }
    }
    document.getElementById("result").innerHTML = result;
};

function skim() {
    let inputNumber = document.getElementById("InputNumber").value;
    let message = "";
    if (inputNumber > 18 || inputNumber < 1 || inputNumber % 1 !== 0) {
        message = 'Error: Please enter an integer between 1 and 18!';
    } else {
        for (let x = 1; x <= inputNumber; x++) {
            if (x % 3 === 0 && x % 5 === 0) {
                result = 'SKIM is a great place to work!!';
                message = message + result + "<br/>";
            } else if (x % 3 === 0) {
                result = 'SKIM';
                message = message + result + "<br/>";
            } else if (x % 5 === 0) {
                result = 'is a great place to work!!';
                message = message + result + "<br/>";
            } else {
                result = x;
                message = message + result + "<br/>";
            }
        }
    }
    document.getElementById("message").innerHTML = message;
}