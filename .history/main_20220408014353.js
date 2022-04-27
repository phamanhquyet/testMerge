let listStudent = new arrayStudent();
let validate = new Debug();
GetStorage();
// add thêm thuộc tính sinh viên
study.prototype.DiemToan ='';
study.prototype.DiemLy ='';
study.prototype.DiemHoa ='';
study.prototype.average ='';
study.prototype.loai ='';
//fuction study
study.prototype.TinhDTB = () =>{
    this.average = (Number(this.DiemHoa)+Number(this.DiemLy)+Number(this.DiemToan))/3;
}
study.prototype.xepLoai = () =>
{
    if(this.DTB<=10 && this.DTB>= 8){
        this.loai ="gioi";
    }else if(this.DTB>8 && this.DTB >6.5){
        this.loai ="kha";
    }else{
        this.loai ="trung binh"
    }
}
// main
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
    let td = document.createElement("td");
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
    console.log(listSV);
    for (let i=0 ;i<listSV.list.length ;i++)
    {   
        let sv = listSV.list[i];
        // tạo thẻ tr
        let trStudent = document.createElement("tr");
        trStudent.id = sv.ID;
        trStudent.className = "trSinhVien";
        trStudent.setAttribute("onclick",`chinhsuasinhvien(${sv.ID})`);
       
        // tạo thẻ td
        // tạo checkbox hổ trợ xóa
        let tdcheckbox = document.createElement("td");
        let ckbID = document.createElement('input');
        ckbID.setAttribute("type", "checkbox");
        ckbID.setAttribute("value",sv.ID);
        ckbID.setAttribute("class", "ckbID");
        // console.log(ckbID);
        tdcheckbox.appendChild(ckbID);

        let tdID = generateTD("Masv",sv.ID);
        let tdFullName = generateTD("tensv",sv.full_name);
        let tdgmail = generateTD("gmail",sv.gmail);
        let tdID_cand = generateTD("cmnd",sv.ID_cand);
        let tdnumberPhone = generateTD("std",sv.number_phone);
        let tdDTB = generateTD("DTB",sv.DTB);
        let tdloai = generateTD("Loai",sv.loai);
        // đẩy lên bảng
        trStudent.appendChild(tdcheckbox);
        trStudent.appendChild(tdID);
        trStudent.appendChild(tdFullName);
        trStudent.appendChild(tdgmail);
        trStudent.appendChild(tdID_cand);
        trStudent.appendChild(tdnumberPhone);
        trStudent.appendChild(tdDTB);
        trStudent.appendChild(tdloai);
        // truyền dữ liệu lên table
        listTable.appendChild(trStudent);
        //==> tạo thẻ tr sau đó đẩy vào bên o tr các td 
        //     cuối cùng đẩy tr vào TableBody

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
   
    Student.DiemToan = DomID('Toan').value;
    Student.DiemLy = DomID('Ly').value;
    Student.DiemHoa = DomID('Hoa').value;
    Student.TinhDTB();
    Student.xepLoai();
    listStudent.addStudent(Student);
    displayTablesStudent(listStudent);
}

function SetStorage(){
    // chuyển file danh sách sinh viên thành file json 
    let jsonListStudent = JSON.stringify(listStudent.list);
    // đem chuỗi json lưu vào storage và đặt tên là danh sách sinh viên
    localStorage.setItem("DanhsachSV",jsonListStudent);
}
function GetStorage(){
    let jsonListStudent = localStorage.getItem("DanhsachSV");
    let newlistStudent = JSON.parse(jsonListStudent);
    // listStudent.list = newlistStudent;
    for(let i=0 ;i<newlistStudent.length;i++)
    {
        listStudent.addStudent(newlistStudent[i]);
    }
    displayTablesStudent(listStudent);
}
// xóa sinh viên 
function XoaSinhVien(){
    let listID = document.getElementsByClassName("ckbID");
    // let listID = document.querySelectorAll(".ckbID");
    console.log("okok" + listID.length);
    let listIDselection = [];
    for(let i=0 ;i<listID.length;i++)
    {
        console.log(listID[i]);
        if(listID[i].checked)
        {
            listIDselection.push(listID[i].value);
        }
        listStudent.deleteStudent(listIDselection);
        displayTablesStudent(listStudent);
    }
}
function TimKiemSinhVien(){
    let keyword = DomID('tukhoa').value;
    console.log("key = "+keyword);
    let listFillStudent = listStudent.fillStudent(keyword);
    displayTablesStudent(listFillStudent);
}
function chinhsuasinhvien(Masv){
    let sv = listStudent.fillStudentById(Masv);
    if(sv!=null){
        DomID('masv').value = sv.ID;
        DomID('hoten').value = sv.full_name;
        DomID('email').value = sv.gmail;
        DomID('cmnd').value = sv.ID_cand;
        DomID('sdt').value = sv.number_phone;
    }
}
function LuuThongTin(){
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
    let newStudent = new study(ID,FullName,gmail,numberPhone,ID_cand);
    listStudent.update(newStudent);
    displayTablesStudent(listStudent);
    

}