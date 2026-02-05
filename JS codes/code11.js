const student = {
  name: "Alice",
  age: 21,
  subjects: ["Math", "Physics", "Computer Science"]
};

console.group("Student Info");   // Start group with label
console.log("Name:", student.name);
console.log("Age:", student.age);

console.group("Subjects");       // Nested group
student.subjects.forEach(sub => console.log(sub)); // Log each subject
console.groupEnd();              // End "Subjects" group

console.groupEnd();              // End "Student Info" group