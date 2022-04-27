
function study(ID,full_name,gmail,number_phone,ID_cand,math,chemistry,physics,average,rank){
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
let MinhNhat = study("0001","MinhNhat","DOminh@gmail.com","099876567","099876",9,9,9,9,"god");
console.log(MinhNhat.ID);
