// Student Grade System

let students = [
    {
        name: "Ahmed",
        grades: [80, 75, 90]
    },
    {
        name: "Mohamed",
        grades: [60, 70, 65]
    },
    {
        name: "Ali",
        grades: [40, 55, 45]
    },
    {
    name: "Hassan",
    grades: [95, 88, 92]
    }
];

// Calculate total grades
function calculateTotal(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    return total;
}

// Calculate average
function calculateAverage(grades) {
    let total = calculateTotal(grades);
    return total / grades.length;
}

// Check student result
function getResult(average) {
    if (average >= 50) {
        return "Passed";
    } else {
        return "Failed";
    }
}

// Get student grade
function getGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Display students
for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let total = calculateTotal(student.grades);
    let average = calculateAverage(student.grades);
    let result = getResult(average);
    let grade = getGrade(average);

    console.log("-----------");
    console.log(`Name: ${student.name}`);
    console.log(`Total: ${total}`);
    console.log(`Average: ${average}`);
    console.log(`Grade: ${grade}`);
    console.log(`Result: ${result}`);
}