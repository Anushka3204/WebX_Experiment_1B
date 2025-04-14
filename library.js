class Student {
  constructor(name, studentId, grade) {
    this.name = name;
    this.studentId = studentId;
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Student ID: ${this.studentId}, Grade: ${this.grade}`;
  }
}

class GraduateStudent extends Student {
  constructor(name, studentId, grade, thesisTopic) {
    super(name, studentId, grade);
    this.thesisTopic = thesisTopic;
  }

  getDetails() {
    return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
  }

  getThesisTopic() {
    return `Thesis Topic: ${this.thesisTopic}`;
  }
}

class LibraryAccount {
  constructor(accountId, booksIssued) {
    this.accountId = accountId;
    this.booksIssued = booksIssued;
  }

  getLibraryInfo() {
    return `Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
  }
}

class StudentWithLibraryAccount {
  constructor(student, libraryAccount) {
    this.student = student;
    this.libraryAccount = libraryAccount;
  }

  getFullDetails() {
    return `${this.student.getDetails()}, ${this.libraryAccount.getLibraryInfo()}`;
  }
}

// Creating instances and printing output
const student1 = new Student("Rina", "S12345", "A");
console.log(student1.getDetails());

const gradStudent1 = new GraduateStudent("Anushka Shahane", "G67890", "A+", "UX Design");
console.log(gradStudent1.getDetails());

const libraryAccount1 = new LibraryAccount("L98765", 5);
console.log(libraryAccount1.getLibraryInfo());

const studentWithLibraryAccount = new StudentWithLibraryAccount(student1, libraryAccount1);
console.log(studentWithLibraryAccount.getFullDetails());

const gradStudentWithLibraryAccount = new StudentWithLibraryAccount(gradStudent1, libraryAccount1);
console.log(gradStudentWithLibraryAccount.getFullDetails());
