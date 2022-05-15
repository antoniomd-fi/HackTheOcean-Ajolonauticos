const {Schema, model} = require('mongoose');

 const UserSchema = Schema({
     name:{
         type: String,
         required:[true, 'El nombre es obligatorio']
     },
     email:{
        type: String,
        required:[true, 'El correo es obligatorio'],
        unique: true
    },
    phone:{
        type: String,
        required:[true, 'El telefono es obligatorio'],
        unique: true
    },
    website:{
        type: String,
        unique: true
    },
    message:{
        type: String,
        unique: true
    },
    status:{
        type: Boolean,
        default: true
    }
 });

 UserSchema.methods.toJSON= function(){
     const { __v,_id, ...user } = this.toObject();
     return user;
 }

 module.exports=model('User', UserSchema);