function arrayStudent(){
    //--------arrayStudent-------------
    this.list = [];
    this.addStudent = function(newStudent){
        this.list.push(newStudent);
    }

    this.editStudent =function(Student){

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
        // let ketqua = new arrayStudent();
        let ketqua = [];
        for(let i=0 ; i<this.list.length ;i++ ){
            var NameSV = this.list[i].full_name;
            if(NameSV.search(keyword) != -1)
            {
                console.log(NameSV);
                ketqua.addStudent(this.list[i]);
            }
        }
        return ketqua;
    }

}