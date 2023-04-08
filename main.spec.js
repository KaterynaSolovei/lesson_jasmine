
describe("Age Classification", () => {

  it("returns null if age is less than or equal to 0", () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(0)).toBe(null);
  });

  it("returns 'детский возраст' if age is less than or equal to 24", () => {
    expect(ageClassification(1)).toBe("детский возраст");
    expect(ageClassification(24)).toBe("детский возраст");
  });

  it("returns 'молодой возраст' if age is less than or equal to 44", () => {
    expect(ageClassification(24.01)).toBe("молодой возраст");
    expect(ageClassification(44)).toBe("молодой возраст");
  });

  it("returns 'средний возраст' if age is less than or equal to 65", () => {
    expect(ageClassification(44.01)).toBe("средний возраст");
    expect(ageClassification(65)).toBe("средний возраст");
  });

  it("returns 'пожилой возраст' if age is less than or equal to 75", () => {
    expect(ageClassification(65.1)).toBe("пожилой возраст");
    expect(ageClassification(75)).toBe("пожилой возраст");
  });

  it("returns 'старческий возраст' if age is less than or equal to 90", () => {
    expect(ageClassification(75.01)).toBe("старческий возраст");
    expect(ageClassification(90)).toBe("старческий возраст");
  });

  it("returns 'долгожители' if age is less than or equal to 122", () => {
    expect(ageClassification(90.01)).toBe("долгожители");
    expect(ageClassification(122)).toBe("долгожители");
  });

  it("returns null if age is greater than 122", () => {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(130)).toBe(null);
  });

});


describe("Days of the week", function() {
  it("return day of the week", function() {
    expect(weekFn(1)).toBe("Понедельник");
  });
  it("return day of the week", function() {
    expect(weekFn(3)).toBe("Среда");
  });
  it("return day of the week", function() {
    expect(weekFn(7)).toBe("Воскресенье");
  });
  it("return day of the week", function() {
    expect(weekFn(9)).toBe(null);
 });
 it("return day of the week", function() {
    expect(weekFn(1.5)).toBe(null);
  });
  it("return day of the week", function() {
    expect(weekFn("2")).toBe(null);
  });
});


