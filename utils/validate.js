const checkName = input => {
    
};

const checkId = () => {

};

const checkEmail = (email) => {
    if(email === undefined){
        return 'Please enter valid email'
    } 
    return true;
};





module.exports = { 
    checkName: checkName,
    checkId: checkId,
    checkEmail: checkEmail
 };