function Debug()
{
    this.checknull = function(value)
    {
        if(value === ""){
            return true;
        }
        return false;
    }
    this.validateEmail = function(email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
        // trả về true hoặc false
      }
}