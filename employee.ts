interface Employee {
  name: string;
  id: string;
  role: string;
  getDetails(): string;
}

class Manager implements Employee {
  name: string;
  id: string;
  role: string;
  department: string;

  constructor(name: string, id: string, department: string) {
    this.name = name;
    this.id = id;
    this.role = 'Manager';
    this.department = department;
  }

  getDetails(): string {
    return `${this.name} (ID: ${this.id}) is a ${this.role} in the ${this.department} department.`;
  }
}

class Developer implements Employee {
  name: string;
  id: string;
  role: string;
  programmingLanguages: string[];

  constructor(name: string, id: string, programmingLanguages: string[]) {
    this.name = name;
    this.id = id;
    this.role = 'Developer';
    this.programmingLanguages = programmingLanguages;
  }

  getDetails(): string {
    return `${this.name} (ID: ${this.id}) is a ${this.role} skilled in ${this.programmingLanguages.join(', ')}.`;
  }
}

// Creating instances
const manager1 = new Manager('Anushka Shahane', 'M001', 'Sales');
const developer1 = new Developer('Rina', 'D001', ['JavaScript', 'TypeScript', 'Python']);

// Logging details
console.log(manager1.getDetails());
console.log(developer1.getDetails());
