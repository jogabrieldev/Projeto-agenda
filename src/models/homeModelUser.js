const validator = require('validator')

class loginUser {
    constructor(body){
        this.body = body;
        this.error = [];
        this.user = null;
    }

      registerUser(){
        this.validaUser();
       if(this.error.length >0)return
    }
     
    validaUser(){
       this.cleanUp();
        //validação do email
       if(!validator.isEmail(this.body.mail)) return this.error.push('e-mail enviado e invalido')
       //validação da senha
       if(this.body.pin.length < 3 || this.body.pin.length >50){this.error.push('Esta senha e invalida,precisa ter entre 3 e 50 caracter')}
    }

    cleanUp(){
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
               return this.body = '';
            };
        };
         this.body = {
            mail: this.body.mail,
            pin: this.body.pin
         }
    };
};
module.exports = loginUser