var db= require('./db');
const userSchema = new db.mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    fullname:{type:String,required:true}
},{collection:'users'});
const commentSchema = new db.mongoose.Schema({
    iduser:{type:db.mongoose.Schema.Types.ObjectId,ref:'usersModel'},
    comment:{type:String,required:true},
    date:{type:String,required:true},

},{collection:'comments'});
const comicSchema = new db.mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    year:{type:String,required:true},
    cover:{type:String,required:true},
    content:{type:Array,required:true}

},{collection:'comics'})
let usersModel = db.mongoose.model('usersModel',userSchema);
let commentModel = db.mongoose.model('commentModel',commentSchema);
let comicModel = db.mongoose.model('comicModel',comicSchema);
module.exports={
    usersModel,commentModel,comicModel
}