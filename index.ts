function showMenu(): void {
    console.log("=== МЕНЮ ===");
    console.log("1. Ввести два числа");
    console.log("2. Выполнить сложение");
    console.log("3. Выполнить вычитание");
    console.log("4. Выполнить деление");
    console.log("5. Возвести число в степень");
    console.log("0. Выход");
}

let num1: number = 0;
let num2: number = 0;

showMenu();

function setNumbers(a: number, b: number): void {
    num1 = a;
    num2 = b;
    console.log(`Числа установлены: ${num1} и ${num2}`);
}