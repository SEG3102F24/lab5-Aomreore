export class Employee {
    public id?: string | null;
    public name: string;
    public dateOfBirth: Date;
    public city: string;
    public salary: number;
    public gender?: string;
    public email?: string;
  
  constructor(name: string, dateOfBirth: Date, city: string, salary: number, gender?: string, email?: string) 
  {
    this.id = null;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.email = email;
    this.salary = salary;
    this.gender = gender;
  }
}
