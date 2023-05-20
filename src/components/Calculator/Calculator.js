class Salary {
    constructor(grossSalary) {
      this.grossSalary = grossSalary; //Հաշվարկային աշխատավարձ
  
      return Salary.netSalary()
    }
   
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