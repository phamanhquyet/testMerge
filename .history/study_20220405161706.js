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
    get getfull_name(){
        return this.full_name;
    }
    get getgmail(){
        return this.gmail;
    }
    get getnumber_phone(){
        return this.number_phone;
    }
    get getID_cand(){
        return this.id_cand;
    }
    get getmath(){
        return this.math;
    }
    get getchemistry(){
        return this.getchemistry;
    }
    get getphysics(){
        return this.physics;
    }

}