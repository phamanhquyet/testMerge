let listStudent = new arrayStudent();
// let validate = new Validation();
function DomID(id){
    let element = document.getElementById(`'${id}'`).value;
    return element;
}
function addStudent()
{
    //get data in table
    let ID =  DomID(masv);
    let FullName =  document.getElementById('hoten').value;
    let gmail = document.getElementById('email').value;
    let ID_cand =  document.getElementById('cmnd').value;
    let numberPhone =  document.getElementById('sdt').value;
    console.log(ID);
    //check validation
}
addStudent();