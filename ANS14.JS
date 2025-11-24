const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

function evaluatePerformance(empList) {
  // Step 1: Filter employees with more than 5 tasks
  const activeEmployees = empList.filter(emp => emp.tasksCompleted > 5);

  // Step 2: Map to name + performance level
  const performanceData = activeEmployees.map(emp => {
    let level = "";
    if (emp.rating > 4.5) {
      level = "Excellent";
    } else if (emp.rating >= 3) {
      level = "Good";
    } else {
      level = "Needs Improvement";
    }
    return { name: emp.name, performance: level };
  });

  // Step 3: Sort by performance level
  const levelOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
  performanceData.sort((a, b) => levelOrder[b.performance] - levelOrder[a.performance]);

  return performanceData;
}

// Function call
const result = evaluatePerformance(employees);
console.log(result);
