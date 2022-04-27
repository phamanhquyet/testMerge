function arrayStudent(){
    //--------arrayStudent-------------
    this.list = [];
    this.addStudent = function(newStudent){
        this.list.push(newStudent);
    }
    
    this.update = function(newStudent){
        console.log("clear");
        for(let i=0 ;i< this.list.length;i++){
            if(newStudent.ID ==  this.list[i].ID){
                this.list[i].ID = this.newStudent.ID;
                this.list[i].full_name = newStudent.full_name;
                this.list[i].gmail = newStudent.gmail;
                this.list[i].ID_cand = newStudent.ID_cand;
            }
        }
    }
     
    this.deleteStudent =function(listStudentDelete){
        for(let i=0 ;i<listStudentDelete.length ;i++)
        {
            for(let j = 0 ;j<this.list.length;j++)
            {
                if(listStudentDelete[i] == this.list[j].ID){
                    this.list.splice(j,1);
                    
                }
            }
        }
    }

    this.fillStudent =function(keyword){
        let ketqua = new arrayStudent();
        for(let i=0 ; i<this.list.length ;i++ ){
            var NameSV = this.list[i].full_name.toLowerCase();
            if(NameSV.search(keyword.toLowerCase()) != -1)
            {
                ketqua.addStudent(this.list[i]);
            }
        }
        return ketqua;
    }
    this.fillStudentById = function(IDstudent){
        for(let i=0 ;i<this.list.length;i++)
        {
            if(this.list[i].ID == IDstudent){
                return this.list[i];
            }
        }
        return null;
    }

}