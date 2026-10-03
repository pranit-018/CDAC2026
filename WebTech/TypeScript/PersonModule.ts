import IPerson from "./Person";


class Teachers implements IPerson{
    pid:number;
    pname:string;
    pcontac:number;
    pstatus:string;
    constructor(pid:number,pname:string,pcontact:number,pstatus:string) {
        this.pid=pid;
        this.pname=pname;
        this.pcontac= pcontact;
        this.pstatus= pstatus;
    }
    personDetails() {
        return `Id:${this.pid} \nName:${this.pname} \nContact:${this.pcontac} \nStatus:${this.pstatus}`
    }
}

let obj1 = new Teachers(101,"Pranit",983533343254,"Single");
console.log(obj1.personDetails());