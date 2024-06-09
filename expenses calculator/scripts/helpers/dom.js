import { Income } from "../models/Income.js";
import { Expense } from "../models/Expense.js";

export const onStart = () => {
    const dateInput = document.getElementById('date-input');
    const nameInput = document.getElementById('title-input');
    const sumInput = document.getElementById('sum-input');
    const select = document.getElementById('select');
    const total = document.getElementById('total');
    const incomes = document.getElementById('incomes');
    const expenses = document.getElementById('expenses');
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const type = select.value;
        const sum = parseInt(type === 'income' ? sumInput.value : -sumInput.value);
        const date = dateInput.value;
        const title = nameInput.value;
        const record = type === 'income' ? new Income(date, title, sum) : new Expense(date, title, sum);
        console.log(record);
    });
}