class Calculator {
    constructor(currentOperation, answerOperation){
        this.currentOperation = currentOperation;
        this.answerOperation = answerOperation;
        this.clear();
    }

    clear(){
        this.answerOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete(){

    }

    toPassNo(number){
        if(number === '.' && this.answerOperand.includes('.')){
            return;
        }
        this.answerOperand = this.answerOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.answerOperand === ''){
            return;
        }
        if(this.currentOperand !=  ''){
            this.compute();
        }
        this.operation = operation;
        this.currentOperand = this.answerOperand;
        this.answerOperand = '';
    }

    compute(){
        let computation;
        const current = parseFloat(this.currentOperand);
        const answer = parseFloat(this.answerOperand);
        if (isNaN(current) || isNaN(answer)){
            return;
        }
        switch(this.operation){
            case '+':
                computation = current + answer;
                break;
            case '-':
                computation = current - answer;
                break;
            case 'x':
                computation = current*answer;
                break;
            case '/':
                computation = current/answer;
                break;
            case '√':
                computation = Math.sqrt(current);
                break;
            default:
                return;
        }
        this.answerOperand = computation;
        this.operation = undefined;

    }

    getDisplayNo(number){

    }

    displayUpdate(){
        this.answerOperation.innerText = this.answerOperand;
        this.currentOperation.innerText = this.currentOperand;
    }
}

const noBtns = document.querySelectorAll('[num_btn]'),
processBtns = document.querySelectorAll('[fun_btn]'),
equalBtn = document.querySelector('#evaluate'),
deleteBtn = document.querySelector('#clear'),
eraseBtn = document.querySelector('#erase'),
currentOperation = document.querySelector('.currentInput'),
answerOperation = document.querySelector('.answerScreen');

const calculator = new Calculator(currentOperation, answerOperation);

noBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.toPassNo(btn.innerText);
        calculator.displayUpdate();
    });
});

processBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.displayUpdate();
    })
})

