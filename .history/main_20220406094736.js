let listStudent = new arrayStudent();
let validate = new Debug();
function DomID(id){
    let element = document.getElementById(id);
    return element;
}
function checkInputValue(ID,value){
    if(validate.checknull(value) == true)
    {
        DomID(ID).style.borderColor = "red";
        return true;
    }
    else
    {
        DomID(ID).style.borderColor = "#28a745";
        return false;
    }
}
function addStudent()
{
    //get data in table
    let ID =  DomID('masv').value;
    let FullName =  DomID('hoten').value;
    let gmail = DomID('email').value;
    let ID_cand =  DomID('cmnd').value;
    let numberPhone =  DomID('sdt').value;
    let checkValue = 0;
    //check validation
    if(checkInputValue('masv',ID)){
        checkValue++;
    }
    if(checkInputValue('hoten',FullName))
    {
        checkValue++;
    } 
    if(validate.validateEmail(gmail)){
        DomID('email').style.borderColor = "#28a745";
    }
    else{
        DomID('email').style.borderColor = "red";
        checkValue++;
    }
    if(checkInputValue('cmnd',ID_cand))
    {
        checkValue++;
    }
    if(checkInputValue('sdt',numberPhone))
    {
        checkValue++;;
    }
    if (checkValue !=0)
    {
        return;
    }
    let Student = new study(ID,FullName,gmail,numberPhone,ID_cand);
    listStudent.addStudent(Student);
    console.log(listStudent);
    
}