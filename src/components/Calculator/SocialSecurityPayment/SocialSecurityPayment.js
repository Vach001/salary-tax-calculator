import {grossSalary} from "../Calculator.js"

export function socialSecurityPayment() {
    // Սոցվճար
    const salary = this.grossSalary;
    const voluntary = false; // կամավոր
    const mandatory = false; //պարտադիր

    if (mandatory) {
      if (salary > 1125000) {
        return 87500;
      } else if (salary > 500000) {
        return salary * 0.1 - 25000;
      } else {
        return salary * 0.05;
      }
    } 
    if (voluntary) {
      if (salary > 1125000) {
        return 56250;
      } else {
        return salary * 0.5;
      }
    }
    return 0;
  }