function checkAll(){
    let uname = document.myform.fname.value;
    let unamereg = "^[a-zA-Z]{2,20}$";

    let email = document.myform.email.value;
    // let emailreg = "";

    let uedu = document.myform.edu;
    let ucourse =document.myform.course.value;

    if(uname==""){
        window.alert("Full Name is Required");
        document.myform.fname.focus();
        return false;
    }
    else if(!uname.match(unamereg))
    {
        window.alert("name contains characters only and it should have minimum 2 and max 20 characters");
        document.myform.fname.focus();
        return false;
    }
    if(email=="")
    {
        window.alert("Email id is required!!!");
        document.myform.email.focus();
        return false;
    }
    // else if(emailreg){
    //     return false;
    // }

    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false &&uedu[3].checked==false)
    {
        window.alert("Select your Qualification!!!!");
        document.myform.course.focus();
        return false;
    }

    if(ucourse == "")
    {
        window.alert("Course is Required..");
        document.myform.course.focus();
        return false;
    }

}