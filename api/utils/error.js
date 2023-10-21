
// for password (to chech the password is strong like it contains 8 to 16 char etc... ) 
export const errHandeler=(statusCode,message)=>{
    console.log("asghuydfgb")
    const err=new Error()
    err.statusCode=statusCode;
    err.message=message;
    console.log(err);
    return err;
}