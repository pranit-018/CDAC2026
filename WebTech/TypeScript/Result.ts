class Student{
    //data members.
    stdId:number=101;
    stdName:string="pranit";
    stdContact:number=7654344567;
    private addhar = 6859030434;
    protected gender = "male";

    //member function
    studentDetails(){
        return `ID:${this.stdId} Name:${this.stdName} Contact:${this.stdContact} Gender:${this.gender} Addhar:${this.addhar}`
    }
    
    // create constructor
    constructor(_id:number,_name:string,_contact:number)
    {
        this.stdContact= _contact;
        this.stdId = _id;
        this.stdName = _name;

    }


}











export default class Result extends Student{
    phy:number=0;
    chem:number=0;
    maths:number=0;
    constructor(_id:number,_name:string,_contact:number,_phy:number,_chem:number,_maths:number){
        super(_id,_name,_contact);
        this.chem=_chem;
        this.maths=_maths;
        this.phy=_phy;
    }
    total(){
        return this.chem+this.phy+this.maths;
    }
    studentDetails(){
        return `Id:${this.stdId} Name:${this.stdName} Conctact:${this.stdContact} Physics:${this.phy} Chemistry:${this.chem} Math:${this.maths} TotalMarks:${this.total() }`;
    }
    

}

// let resultObj = new Result(21,"Pranit",786543,80,75,95);
// console.log(resultObj.studentDetails());