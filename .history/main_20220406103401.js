let listStudent = new arrayStudent();
let validate = new Debug();
function DomID(id){
    let element = document.getElementById(id);
    return element;
}
function checkInputValue(ID,value)
{
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
//tạo thẻ td
function generateTD(className,value)
{
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}
//hiển thị danh sách sinh viên
function displayTablesStudent(listSV)
{
    let listTable = DomID('tbodySinhVien');
    // xóa dữ liệu bên trong html 
    listTable.innerHTML = "";
    for (let i=0 ;i<listSV.list.length ;i++)
    {   
        let sv = listSV.list[i];
        let trStudent = document.createElement("tr");
        let tdID = generateTD("Masv",sv.ID)
    }
}
// sự kiện bắt từ nút thêm trong html onclick="addStudent()"
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