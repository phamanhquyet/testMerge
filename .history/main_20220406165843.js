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
        //tạo thẻ tr
        let trStudent = document.createElement("tr");
        // tạo thẻ td
        let tdcheckbox = document.createElement("td");
        let tdID = generateTD("Masv",sv.ID);
        let tdFullName = generateTD("tensv",sv.full_name);
        let tdgmail = generateTD("gmail",sv.gmail);
        let tdID_cand = generateTD("cmnd",sv.ID_cand);
        let tdnumberPhone = generateTD("std",sv.number_phone);
        // đẩy lên bảng
        trStudent.appendChild(tdcheckbox);
        trStudent.appendChild(tdID);
        trStudent.appendChild(tdFullName);
        trStudent.appendChild(tdgmail);
        trStudent.appendChild(tdID_cand);
        trStudent.appendChild(tdnumberPhone);

        listTable.appendChild(trStudent);

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
    displayTablesStudent(listStudent)
    console.log(listStudent);
}
function SetStorage(){
    
}