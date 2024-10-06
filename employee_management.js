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
let employee1 = new Employee("Mickey Mouse", 133000, "Live entertainer", "Entertainment");
console.log(employee1.getDetails());
/* Code has been tested and displays expected outcome. 
Task 1 is now complete. */

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
constructor(name, salary, position, department, bonus) {
super(name, salary, position, department); 
this.bonus = bonus;}
// Code created to start showing and displaying the bonus amount when the code output is revealed.
getDetails() {
return `${super.getDetails()}, Bonus amount: $${this.bonus}`;}}
// Code meant to display the details about the staff members and the bonus amount.
let manager1 = new Manager("Belle", 148000, "Restaurant Manager", "Restaurant", 15000);
let manager2 = new Manager("Jazmine", 155000, "Theme Park Manager", "Entertainment", 20000);
let manager3 = new Manager("Tiana", 145000, "Theme Park Manager Assistant", "Entertainment", 12000);
// New managers set. Code meant to include information about added managers or staff members while also displaying the bonus amount set.
console.log(manager1.getDetails());
console.log(manager2.getDetails());
console.log(manager3.getDetails());
/* Code created to display output through a set message.
Code has been tested and displays desired output.
Code runs as needed.
Task 3 is now complete.*/


// Task 2: Create a Department Class and Task 4: Handle Bonuses in the Department Salary Calculation
class Department {
constructor(name) {
this.name = name;
this.employees = [];}
addEmployee(employee) {
this.employees.push(employee);}
// Code created to "push" or combine the employee class along with the employee array.
getDepartmentSalary() {
return this.employees.reduce((total, employee) => total + employee.salary, 0);}
calculateTotalSalaryWithBonus() {
return this.employees.reduce((total, employee) => {
if (employee instanceof Manager) {
return total + employee.salary + employee.bonus;}
return total + employee.salary;}, 0);}}
// Department class created. 
// Code created to determine how the salary for the departments should be added to get the desired output. 
let entertainment = new Department("Entertainment");
let store = new Department("Store");
// New departments created. 
// New departments added and code created to be able to define the additional departments.
let minnieMouse = new Employee("Minnie Mouse", 130000, "Live entertainer", "Entertainment");
let lynndaDianne = new Employee("Lynnda Dianne", 120000, "Manager", "Store");
let tanyaLouise = new Employee("Tanya Louise", 105000, "Manager", "Store");
let ariel = new Employee("Ariel", 115000, "Live entertainer", "Entertainment");
let cinderella = new Employee("Cinderella", 100000, "Live entertainer", "Entertainment");
// New data created to be able to test the code. 
// Data added to assign new employees, their names, salaries, position, and departments. 
entertainment.addEmployee(minnieMouse);
store.addEmployee(lynndaDianne);
store.addEmployee(tanyaLouise);
entertainment.addEmployee(ariel);
entertainment.addEmployee(cinderella);
// Code created to verify the information and the data added.
let totalEntertainmentSalary = entertainment.getDepartmentSalary();
let totalStoreSalary = store.getDepartmentSalary();
let combinedSalary = totalEntertainmentSalary + totalStoreSalary;
// Code created to be able to output the combined salary amount for all departments.
let totalEntertainmentSalaryWithBonus = entertainment.calculateTotalSalaryWithBonus();
let totalStoreSalaryWithBonus = store.calculateTotalSalaryWithBonus();
let combinedSalaryWithBonus = totalEntertainmentSalaryWithBonus + totalStoreSalaryWithBonus;
// Code created to be able to output the combined salary amount for all departments along with the bonuses.
console.log(`The total salary for the "entertainment" department is: $${totalEntertainmentSalary}`);
console.log(`The total salary for the "store" department is: $${totalStoreSalary}`);
console.log(`The combined salary for all departments (entertainment and store departments) is: $${combinedSalary}`);
console.log(`The total salary for the "entertainment" department with bonuses is: $${totalEntertainmentSalaryWithBonus}`);
console.log(`The total salary for the "store" department with bonuses is: $${totalStoreSalaryWithBonus}`);
console.log(`The combined salary for all departments (entertainment and store departments) with bonuses is: $${combinedSalaryWithBonus}`);
/* Code created to display output with a chosen message. 
Code is tested and displays expected output.
Code displays total salary for both departments individually and combined and also calculates the bonuses. 
I combined 2 tasks in one as this was the only way my code wouuld run.
Tasks 2 and 4 are now complete. */




