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
    status:{
        type: Boolean,
        default: true
    }
 });

 UserSchema.methods.toJSON= function(){
     const { __v,password,_id, ...user } = this.toObject();
     user.uid=_id;
     return user;
 }

 module.exports=model('User', UserSchema);