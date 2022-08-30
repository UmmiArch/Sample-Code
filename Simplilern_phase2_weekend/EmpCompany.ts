class EmpCompany{

    private empId : number=0;
    private empName: string="";
    private empSalary: number= 0.0;
    public empComp: string = 'piramal foundation';
    protected empDepartment : string; 
    constructor(empId : number, empName: string, empSalary: number,empDepartment : string){
     
        this.empId = empId;
        this.empName= empName;
        this.empSalary= empSalary;
        this.empDepartment = empDepartment;
    }

    getEmployeeDetails(): string {

        return '${this.empId} ${this.empName} ${this.empSalary} ${this.empDepartment}';
    
    }
}

     const empp = new EmpCompany (32423424,"Raja Ram", 44433,'HR');

     console.log(empp.getEmployeeDetails());