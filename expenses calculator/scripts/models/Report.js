export class Report {
    #id;
    date;
    name;
    sum;

    static reportsList = [];

    constructor(date, name, sum) {
        this.date = date;
        this.name = name;
        this.sum = sum;

        Report.reportsList.push(this);
        this.#id = Report.reportsList.length;
    }

    getInfo() {
        return `${this.#id}, ${this.date}, ${this.name}, ${this.sum}`;
    }
}

