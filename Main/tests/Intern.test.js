const Intern = require("../lib/Intern");

describe(`Intern`, () => {
  it(`should create a new intern object when initialized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });
  it(`should set name via the constructor`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.name).toBe("Jason");
  });
  it(`should return the name when getName() is called`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.getName()).toBe("Jason");
  });
  it(`should set id via the constructor`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.id).toBe(1);
  });
  it(`should return the id when getID() is called`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.getID()).toBe(1);
  });
  it(`should set email via the constructor`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.email).toBe("jason@email.com");
  });
  it(`should return the email when getEmail() is called`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.getEmail()).toBe("jason@email.com");
  });
  it(`should set school via the constructor`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.school).toBe("Madison");
  });
  it(`should return the school "Madison" when getSchool() is called`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.getSchool()).toBe("Madison");
  });
  it(`should return Intern when getrole is called`, () => {
    const intern = new Intern("Jason", 1, "jason@email.com", "Madison");
    expect(intern.getRole()).toBe("Intern");
  });
});
