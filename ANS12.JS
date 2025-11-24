const students = [
  { name: "Alice", marks: 58 },
  { name: "Bob", marks: 85 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 45 },
  { name: "Emma", marks: 76 },
  { name: "Frank", marks: 63 },
  { name: "Grace", marks: 89 },
  { name: "Hannah", marks: 95 },
  { name: "Ian", marks: 54 },
  { name: "Jack", marks: 79 },
  { name: "Kate", marks: 67 },
  { name: "Leo", marks: 88 },
  { name: "Mia", marks: 91 },
  { name: "Nathan", marks: 72 },
  { name: "Olivia", marks: 82 }
];

function processStudents(list) {
  // Marks 60 se zyada wale students
  const passed = list.filter(s => s.marks > 60);

  // Descending order me sort
  passed.sort((s1, s2) => s2.marks - s1.marks);

  // Sirf names nikalna
  const namesOnly = passed.map(s => s.name);

  return namesOnly;
}

console.log(processStudents(students));
