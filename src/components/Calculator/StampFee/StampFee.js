import { grossSalary } from "../Calculator.js"

export function stampFee() {
    // Դրոշմանիշային վճար
    const salary = this.apply.grossSalary;

    if (salary >= 1000001) {
        return 15000;
    } else if (salary >= 500001) {
        return 8500;
    } else if (salary >= 200001) {
        return 5500;
    } else if (salary >= 100001) {
        return 3000;
    } else {
        return 1500;
    }
} 