const Engineer = require("../lib/Engineer");

describe(`engineer`, () => {
  it(`should create a new engineer object when initialized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });
  it(`should set name via the constructor`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.name).toBe("Jason");
  });
  it(`should return the name when getName() is called`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.getName()).toBe("Jason");
  });
  it(`should set id via the constructor`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.id).toBe(1);
  });
  it(`should return the id when getID() is called`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.getID()).toBe(1);
  });
  it(`should set email via the constructor`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.email).toBe("jason@email.com");
  });
  it(`should return the email when getEmail() is called`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.getEmail()).toBe("jason@email.com");
  });
  it(`should set github via the constructor`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.github).toBe("github.com/jasonsburke");
  });
  it(`should return the github when getGithub() is called`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.getGithub()).toBe("github.com/jasonsburke");
  });
  it(`should return Engineer when getrole is called`, () => {
    const engineer = new Engineer(
      "Jason",
      1,
      "jason@email.com",
      "github.com/jasonsburke"
    );
    expect(engineer.getRole()).toBe("Engineer");
  });
});
