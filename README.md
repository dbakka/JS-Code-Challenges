# JavaScript Coding Challenges

This repository contains solutions to three JavaScript coding challenges: a Student Grade Generator, a Speed Detector, and a Net Salary Calculator.

## Table of Contents
1. [Student Grade Generator](#student-grade-generator)
2. [Speed Detector](#speed-detector)
3. [Net Salary Calculator](#net-salary-calculator)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Author](#author)
7. [License](#license)

## Student Grade Generator

This program prompts the user to input student marks and outputs the correct grade based on the following criteria:
- A > 79
- B - 60 to 79
- C - 49 to 59
- D - 40 to 49
- E - less than 40

File: `studentGradeGenerator.js`

## Speed Detector

This program takes the speed of a car as input and determines if the driver is within the speed limit. It calculates demerit points for speeds above the limit and can recommend license suspension.

File: `speedDetector.js`

## Net Salary Calculator

This program calculates an individual's Net Salary by taking inputs of basic salary and benefits. It computes:
- Gross Salary
- PAYE (Tax)
- NHIF Deductions
- NSSF Deductions
- Net Salary

The calculations are based on the KRA, NHIF, and NSSF rates as of 2024.

File: `netSalaryCalculator.js`

## Setup

To run these programs, you need to have Node.js installed on your computer. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/dbakka/JS-Code-Challenges.git
   ```
2. Navigate to the project directory:
   ```
   cd JS-Code-Challenges
   ```

## Usage

To run each program, use the Node.js runtime:

1. Student Grade Generator:
   ```
   node studentGradeGenerator.js
   ```

2. Speed Detector:
   ```
   node speedDetector.js
   ```

3. Net Salary Calculator:
   ```
   node netSalaryCalculator.js
   ```

Follow the prompts in each program to input the required information.

## Author

David Bakka

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
