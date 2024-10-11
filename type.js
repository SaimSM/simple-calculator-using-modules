// class Calculator {
//     // Method to add two numbers
//     add(a: number, b: number): number {
//         return a + b;
//     }
//     // Method to subtract two numbers
//     subtract(a: number, b: number): number {
//         return a - b;
//     }
//     // Method to multiply two numbers
//     multiply(a: number, b: number): number {
//         return a * b;
//     }
//     // Method to divide two numbers
//     divide(a: number, b: number): number {
//         if (b === 0) {
//             throw new Error("Division by zero is not allowed");
//         }
//         return a / b;
//     }
// }
// // Usage example
// const calculator = new Calculator();
// const num1 = 12;
// const num2 = 4;
// // const num1: number = console.log(num1 "enter the first number");
// // const num: number = console.log(num2 "enter the second number");
// console.log(`Addition: ${calculator.add(num1, num2)}`); // Output: 16
// console.log(`Subtraction: ${calculator.subtract(num1, num2)}`); // Output: 8
// console.log(`Multiplication: ${calculator.multiply(num1, num2)}`); // Output: 48
// console.log(`Division: ${calculator.divide(num1, num2)}`); // Output: 3
// const name: string = "Eric";
// console.log(name.toLowerCase);
// console.log(name.toUpperCase);
// console.log("Eric");
import readline from 'readline';
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }
    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }
    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }
    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            console.log("Division by zero is not allowed");
        }
        return a / b;
    }
}
const calculator = new Calculator();
// Create a readline interface to interact with the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to perform calculator operations based on user input
const performOperation = () => {
    rl.question('Enter the first number: ', (input1) => {
        const num1 = parseFloat(input1);
        rl.question('Enter the second number: ', (input2) => {
            const num2 = parseFloat(input2);
            rl.question('Enter the operation (+, -, *, /): ', (operation) => {
                let result;
                switch (operation) {
                    case '+':
                        result = calculator.add(num1, num2);
                        break;
                    case '-':
                        result = calculator.subtract(num1, num2);
                        break;
                    case '*':
                        result = calculator.multiply(num1, num2);
                        break;
                    case '/':
                        try {
                            result = calculator.divide(num1, num2);
                        }
                        catch (error) {
                            // console.error(error.message);
                            rl.close();
                            return;
                        }
                        break;
                    default:
                        console.error('Invalid operation');
                        rl.close();
                        return;
                }
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
};
// Start the calculator operation
performOperation();
