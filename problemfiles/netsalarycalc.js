//Employees net salary calculator per individual

function netSalaryCalc (basicSalary, benefits) {
    const grossSalary = basicSalary + benefits
    
// computes NSSF Deductions
    let nssfDeductions;
        if (basicSalary<=18000) {
            nssfDeductions = 0.06*basicSalary;
        } else if (basicSalary>18000) {
            nssfDeductions = 1080
        }
    
// computes the taxable pay
    const taxablePay = grossSalary - nssfDeductions

// computes the PAYE
    let paye;
         const taxBand1 = 24000
         const taxBand2 = 32333
         const taxBand3 = 500000
         const taxBand4 = 800000
        if (taxablePay<=taxBand1) {
            paye = 0.1*taxablePay;
        } else if (taxablePay<=taxBand2) {
            paye = 0.1*taxBand1 + 0.25*(taxablePay-taxBand1);
        } else if (taxablePay<=taxBand3) {
            paye = 0.1*taxBand1 + 0.25*(taxBand2-taxBand1) + 0.3*(taxablePay-taxBand2);
        } else if (taxablePay<=taxBand4) {
            paye = 0.1*taxBand1 + 0.25*(taxBand2-taxBand1) + 0.3*(taxBand3-taxBand2) + 0.325*(taxablePay-taxBand3);
        } else if (taxablePay>taxBand4) {
            paye = 0.1*taxBand1 + 0.25*(taxBand2-taxBand1) + 0.3*(taxBand3-taxBand2) + 0.325*(taxBand4-taxBand3) + 0.35*(taxablePay-taxBand4);
        }

// computes NHIF Deductions
    let nhifDeductions;
        if (grossSalary<6000) {
            nhifDeductions = 150;
        } else if (grossSalary<8000 && grossSalary>5999) {
            nhifDeductions = 300;
        } else if (grossSalary<12000 && grossSalary>7999) {
            nhifDeductions = 400;
        } else if (grossSalary<15000 && grossSalary>11999) {
            nhifDeductions = 500;
        } else if (grossSalary<20000 && grossSalary>14999) {
            nhifDeductions = 600;
        } else if (grossSalary<25000 && grossSalary>19999) {
            nhifDeductions = 750;
        } else if (grossSalary<30000 && grossSalary>24999) {
            nhifDeductions = 850;
        } else if (grossSalary<35000 && grossSalary>29999) {
            nhifDeductions = 900;
        } else if (grossSalary<40000 && grossSalary>34999) {
            nhifDeductions = 950;
        } else if (grossSalary<45000 && grossSalary>39999) {
            nhifDeductions = 1000;
        } else if (grossSalary<50000 && grossSalary>44999) {
            nhifDeductions = 1100;
        } else if (grossSalary<60000 && grossSalary>49999) {
            nhifDeductions = 1200;
        } else if (grossSalary<70000 && grossSalary>59999) {
            nhifDeductions = 1300;
        } else if (grossSalary<80000 && grossSalary>69999) {
            nhifDeductions = 1400;
        } else if (grossSalary<90000 && grossSalary>79999) {
            nhifDeductions = 1500;
        } else if (grossSalary<100000 && grossSalary>89999) {
            nhifDeductions = 1600;
        } else if (grossSalary>99999) {
            nhifDeductions = 1700;
        }
    
//computes housing levy
    const housingLevy = 0.015* grossSalary

//Defines personal relief
    const personalRelief = 2400

//Computes the net salary
    const netSalary = grossSalary - nssfDeductions - paye - nhifDeductions - housingLevy + personalRelief;
    
    return (netSalary);
}
