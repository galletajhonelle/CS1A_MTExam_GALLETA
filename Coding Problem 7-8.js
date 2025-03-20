//Coding Problem 7-8: Student Enrollment:
let DSA = [];
let WebDev = [];

function manageEnrollment(subject) {
    let operation;
    do {
        operation = prompt(`Managing ${subject}. Choose an option: \n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`).toUpperCase();
        if (operation === 'A') {
            // Enroll a student
            let studentName = prompt(`Enter the name of the student to enroll in ${subject}:`);
            if (subject === 'DSA') {
                DSA.push(studentName);
            } else if (subject === 'WebDev') {
                WebDev.push(studentName);
            }
            console.log(`${studentName} has been enrolled in ${subject}.`);

        } else if (operation === 'B') {
            // Unenroll a student
            let students = subject === 'DSA' ? DSA : WebDev;
            if (students.length > 0) {
                console.log(`Currently enrolled students in ${subject}: ${students.join(', ')}`);
                let studentName = prompt(`Enter the name of the student to unenroll from ${subject}:`);
                let index = students.indexOf(studentName);
                if (index !== -1) {
                    students.splice(index, 1); 
                    console.log(`${studentName} has been unenrolled from ${subject}.`);
                } else {
                    console.log(`${studentName} is not enrolled in ${subject}.`);
                }

            } else {
                console.log(`No students are enrolled in ${subject}.`);
            }

        } else if (operation === 'C') {
            console.log("Returning to subject selection...");

        } else if (operation === 'D') {
            // Exit the program
            console.log("Exiting program...");
            console.log(`Enrolled students in DSA: ${DSA.join(', ')}`);
            console.log(`Enrolled students in WebDev: ${WebDev.join(', ')}`);
        } else {
            console.log("Invalid option. Please choose again.");
        }

    } while (operation !== 'C' && operation !== 'D');
}
let subject;
do {
    subject = prompt("Select a subject to manage:\n(A) DSA\n(B) WebDev\n(C) Exit").toUpperCase();
    if (subject === 'A') {
        manageEnrollment('DSA');
    } else if (subject === 'B') {
        manageEnrollment('WebDev');
    } else if (subject === 'C') {
        console.log("Goodbye!");
    } else {
        console.log("Invalid option. Please choose again.");
    }

} while (subject !== 'C');
