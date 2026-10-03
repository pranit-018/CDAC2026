class Teachers {
    pid;
    pname;
    pcontac;
    pstatus;
    constructor(pid, pname, pcontact, pstatus) {
        this.pid = pid;
        this.pname = pname;
        this.pcontac = pcontact;
        this.pstatus = pstatus;
    }
    personDetails() {
        return `Id:${this.pid} \nName:${this.pname} \nContact:${this.pcontac} \nStatus:${this.pstatus}`;
    }
}
let obj1 = new Teachers(101, "Pranit", 983533343254, "Single");
console.log(obj1.personDetails);
export {};
