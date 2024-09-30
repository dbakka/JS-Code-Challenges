// Net Salary Calculator

// PAYE (Tax) rates
const payeRates = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 25 },
    { min: 32334, max: 500000, rate: 30 },
    { min: 500001, max: 800000, rate: 32.5 },
    { min: 800001, max: Infinity, rate: 35 }
];

// NHIF rates
const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
];

// NSSF rate (assuming Tier I for simplicity)
const nssfRate = 0.06;

function calculatePAYE(grossSalary) {
    let tax = 0;
    let taxableSalary = grossSalary;

    for (let rate of payeRates) {
        if (taxableSalary > rate.min) {
            let taxableAmount = Math.min(taxableSalary, rate.max) - rate.min;
            tax += taxableAmount * (rate.rate / 100);
        }
        if (taxableSalary <= rate.max) break;
    }

    return tax;
}

function calculateNHIF(grossSalary) {
    for (let rate of nhifRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            return rate.deduction;
        }
    }
    return nhifRates[nhifRates.length - 1].deduction;
}

function calculateNSSF(grossSalary) {
    // Assuming only Tier I contribution for simplicity
    const nssfLimit = 6000;
    return Math.min(grossSalary * nssfRate, nssfLimit * nssfRate);
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - (paye + nhif + nssf);

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}

function netSalaryCalculator() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter positive numbers for salary and benefits.");
        return;
    }

    const result = calculateNetSalary(basicSalary, benefits);

    console.log("Gross Salary:", result.grossSalary.toFixed(2));
    console.log("PAYE (Tax):", result.paye.toFixed(2));
    console.log("NHIF Deduction:", result.nhif.toFixed(2));
    console.log("NSSF Deduction:", result.nssf.toFixed(2));
    console.log("Net Salary:", result.netSalary.toFixed(2));
}

// Call the function to run the program
netSalaryCalculator();