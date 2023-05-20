import { IncomeTax } from "../../IncomTax/IncomTax.js";
import { stampFee } from "../StampFee/StampFee.js";
import { socialSecurityPayment } from "../SocialSecurityPayment/SocialSecurityPayment.js";

export function NetSalary() {
    // Զուտ աշխատավարձ
    const salary = this.grossSalary;
    const incom = Salary.incomeTax();
    const soc = Salary.socialSecurityPayment();
    const stamp = Salary.stampFee();

    return salary - (incom + soc + stamp);
}
const sal = new Salary(150000)

console.log(sal);