import { grossSalary } from "../Calculator/Calculator.js"

function IncomeTax(grossSalary = 200000, sertificat = false) {
    {
        // Եկամտային հարկ
        if (sertificat === true) {
            return this.grossSalary * 0.1;
        }

        return this.grossSalary * 0.2;
    }
}