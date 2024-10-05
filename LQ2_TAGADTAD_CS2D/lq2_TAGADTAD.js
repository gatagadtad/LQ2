// Ask for user input
let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let age = String(prompt("Enter your age:"));
let classRole = prompt("Enter your class role (Officer, Student, Teacher):");
let course = prompt("Enter your course (BSCS, BSM, BAEL):");

// Conditional statement to detect the course
switch (course) {
  case "BSCS":
  case "BSM":
  case "BAEL":
    // Conditional statement to detect the class role
    switch (classRole) {
      case "Officer":
      case "Student":
      case "Teacher":
        // Loop statement to print the name of the user (1/4 of the age input)
        for (let i = 0; i < Math.floor(age / 4); i++) {
          alert(`Name: ${name}`);
        }
        break;
      default:
        alert("Invalid class role entered. Please enter Officer, Student, or Teacher.");
    }
    break;
  default:
    alert("Invalid course entered. Please enter BSCS, BSM, or BAEL.");
}
