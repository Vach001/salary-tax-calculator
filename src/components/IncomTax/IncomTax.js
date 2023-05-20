import { grossSalary } from "../Calculator/Calculator.js"

export function IncomeTax(grossSalary, sertificat = false) {
    {
        // Եկամտային հարկ
        if (sertificat === true) {
            return this.grossSalary * 0.1;
        }

        return this.grossSalary * 0.2;
    }
}