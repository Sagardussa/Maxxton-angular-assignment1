export class Employeeclass {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public Mobile: number,
    public email: string,
    public address: any,
    public street: any,
    public pinCode: number,
    public city: string,
    public state: string,
    public country: string,
    public id?: number,
    public Title?: string,
    public images?: string

  ) { }
}
