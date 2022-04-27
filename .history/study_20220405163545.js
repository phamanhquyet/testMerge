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
    display(){
        return `ID = ${this.ID}`;
    }

}
let MinhNhat = new study("001","Minh Nhat","@gg","0886","0998",9,9,9,9,"god");
console.log(MinhNhat.full_name);
console.log(MinhNhat.display());