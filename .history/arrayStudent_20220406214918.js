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
        let ketqua = new arrayStudent();
    }

}