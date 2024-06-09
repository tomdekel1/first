import { Report } from "./Report.js";

export class Income extends Report {
    type = "Income";

    constructor(date, name, sum) {
        super(date, name, sum);
    }

    getInfo() {
        return `${this.name}  | ${this.sum}₪  | ${this.date}`;
    }
}
