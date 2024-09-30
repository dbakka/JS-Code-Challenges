// Student Grade Generator

function generateGrade(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 49) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

function studentGradeGenerator() {
    const marks = parseFloat(prompt("Enter student marks (0-100):"));
    
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }
    
    const grade = generateGrade(marks);
    console.log(`Student grade: ${grade}`);
}

// Call the function to run the program
studentGradeGenerator();