import { Report } from "./Report.js";

export class Expense extends Report {
    type = "Expense";

    constructor(date, name, sum) {
        super(date, name, sum);
    }

    getInfo() {
        return `${this.name}  | ${0 - this.sum}₪  | ${this.date}`;
    }
}