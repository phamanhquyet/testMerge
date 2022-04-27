let listStudent = new arrayStudent();
let validate = new Debug();
function DomID(id){
    let element = document.getElementById(id);
    return element;
}
function checkInputValue(ID,value){
    if(validate.checknull(value) == true)
    {
        DomID('masv').style.borderColor = "red";
        return true;
    }
    else
    {
        DomID('masv').style.borderColor = "#28a745";
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
    //check validation
    if(validate.checknull(ID)==true){
        DomID('masv').style.borderColor = "red";
    }
    else
    {
        DomID('masv').style.borderColor = "#28a745";
    }
}