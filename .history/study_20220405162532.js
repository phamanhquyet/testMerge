class study{
    //contructor in study
    constructor (ID,full_name,gmail,number_phone,ID_cand,math,chemistry,physics,average,rank){
        this.ID=ID;
        this.full_name=full_name;
        this.gmail=gmail;
        this.number_phone=number_phone;
        this.ID_cand=ID_cand;
        this.math=math;
        this.chemistry=chemistry;
        this.physics=physics;
        this.average=average;
        this.rank=rank;
    }
    get getID(){
        return this.ID;
    }
    get getFull_name(){
        return this.full_name;
    }
    get getGmail(){
        return this.gmail;
    }
    get getNumber_phone(){
        return this.number_phone;
    }
    get getID_cand(){
        return this.id_cand;
    }
    get getMath(){
        return this.math;
    }
    get getChemistry(){
        return this.getchemistry;
    }
    get getPhysics(){
        return this.physics;
    }
    get getAverage(){
        return this.average;
    }
    get getRank(){
        return this.rank;
    }

}
let MinhNhat = new study("001","Minh Nhat","@gg","0886","0998",9,9,9,9,"god");
console.log(MinhNhat.full_name);