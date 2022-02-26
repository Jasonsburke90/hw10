const Manager = require("../lib/Manager");

describe(`Manager`, () => {
  it(`should create a new intern object when initialized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });
  it(`should set name via the constructor`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.name).toBe("Jason");
  });
  it(`should return the name when getName() is called`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.getName()).toBe("Jason");
  });
  it(`should set id via the constructor`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.id).toBe(1);
  });
  it(`should return the id when getID() is called`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.getID()).toBe(1);
  });
  it(`should set email via the constructor`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.email).toBe("jason@email.com");
  });
  it(`should return the email when getEmail() is called`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.getEmail()).toBe("jason@email.com");
  });
  it(`should set office number via the constructor`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.officeNumber).toBe(42);
  });
  it(`should return the office number 42 when getOfficeNumber() is called`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.getOfficeNumber()).toBe(42);
  });
  it(`should return Intern when getrole is called`, () => {
    const manager = new Manager("Jason", 1, "jason@email.com", 42);
    expect(manager.getRole()).toBe("Manager");
  });
});
