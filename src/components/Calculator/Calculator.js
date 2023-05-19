class Salary {
    constructor(grossSalary) {
      this.grossSalary = grossSalary; //Հաշվարկային աշխատավարձ
  
      return Salary.netSalary()
    }
    static incomeTax(sertificat = false) {
      // Եկամտային հարկ
      if (sertificat) {
        return this.grossSalary * 0.1;
      }
  
      return this.grossSalary * 0.2;
    }
    static socialSecurityPayment() {
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
  
    static stampFee() {
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
    static netSalary() {
      // Զուտ աշխատավարձ
      const salary = this.grossSalary;
      const incom = Salary.incomeTax();
      const soc = Salary.socialSecurityPayment();
      const stamp = Salary.stampFee();
    
      return salary - (incom + soc + stamp);
    }
  }
  
  const sal = new Salary(150000)
  
  console.log(sal);