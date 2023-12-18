//Employees net salary calculator per individual

function netSalary (basicSalary, benefits, paye, nhifDeductions, nssfDeductions, relief) {
    let grossSalary = basicSalary + benefits
    
// computes NSSF Deductions
    let nssfDeductions;
        if (basicSalary<=18000) {
            return 0.06*basicSalary;
        } else if (basicSalary>18000) {
            return 1080
        }
    
// computes the taxable pay
    let taxablePay = grossSalary - nssfDeductions

// computes the PAYE
    let paye;
         const taxBand1 = 24000
         const taxBand2 = 32333
         const taxBand3 = 500000
         const taxBand4 = 800000
        if (taxablePay<=taxBand1) {
            return 0.1*taxablePay;
        } else if (taxablePay<=taxBand2) {
            return 0.1*taxBand1 + 0.25*(taxablePay-taxBand1);
        } else if (taxablePay<=taxBand3) {
            return 0.1*taxBand1 + 0.25*(taxBand2-taxBand1) + 0.3*(taxablePay-taxBand2);
        } else if (taxablePay<=taxBand4) {
            return 0.1*taxBand1 + 0.25*(taxBand2-taxBand1) + 0.3*(taxBand3-taxBand2) + 0.325*(taxablePay-taxBand3);
        } else if (taxablePay>taxBand4) {
            return 0.1*taxBand1 + 0.25*(taxBand2-taxBand1) + 0.3*(taxBand3-taxBand2) + 0.325*(taxBand4-taxBand3) + 0.35*(taxablePay-taxBand4);
        }

// computes NHIF Deductions. Appropriate rates upto 29999, the rest to be adjusted accordingly
    let nhifDeductions;
        if (grossSalary<6000) {
            return 150;
        } else if (grossSalary<8000 && grossSalary>5999) {
            return 300;
        } else if (grossSalary<12000 && grossSalary>7999) {
            return 400;
        } else if (grossSalary<15000 && grossSalary>11999) {
            return 500;
        } else if (grossSalary<20000 && grossSalary>14999) {
            return 600;
        } else if (grossSalary<25000 && grossSalary>19999) {
            return 750;
        } else if (grossSalary<30000 && grossSalary>24999) {
            return 850;
        } else if (grossSalary>30000) {
            return 1200;
        }
const netSalary = grossSalary - nssfDeductions - paye - nhifDeductions + relief
}
 
