export class User {
  public name: string;
  public email: string;
  public city: string;
  public description: string;

  constructor(uname: string, email: string, city: string, desc: string) {
    this.name = uname;
    this.email = email;
    this.city = city;
    this.description = desc;
  }
}
