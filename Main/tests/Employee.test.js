const Employee = require("../lib/Employee");

describe(`employee`, () => {
  it(`should create a new employee object when initialized`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
  it(`should set name via the constructor`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.name).toBe("Jason");
  });
  it(`should return the name when getName() is called`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.getName()).toBe("Jason");
  });
  it(`should set id via the constructor`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.id).toBe(1);
  });
  it(`should return the id when getID() is called`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.getID()).toBe(1);
  });
  it(`should set email via the constructor`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.email).toBe("jason@email.com");
  });
  it(`should return the email when getEmail() is called`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.getEmail()).toBe("jason@email.com");
  });
  it(`should return Employee when getrole is called`, () => {
    const employee = new Employee("Jason", 1, "jason@email.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
