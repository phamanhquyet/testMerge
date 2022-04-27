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
    let checkValue = true;
    //check validation
    if(checkInputValue('masv',ID)){
        checkValue = flase;
    }   
}