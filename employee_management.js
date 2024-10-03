// Task 1: Create an Employee Class

class Employee {constructor(name, salary, position, department) {
this.name = name;
this.salary = salary;
this.position = position;
this.department = department;}
// Employee class created. 
// Code is set to display name, salary, position, and department.
getDetails() {
return `Employee name: ${this.name}, Employee position: ${this.position}, Employee salary: $${this.salary}`;}}
// Code is set to display information through a message.
let employee1 = new Employee("Mickey Mouse", 133000, "Entertainer", "Entertainment");
console.log(employee1.getDetails());
/* Code has been tested and displays expected outcome. 
Task 1 is now complete. */
