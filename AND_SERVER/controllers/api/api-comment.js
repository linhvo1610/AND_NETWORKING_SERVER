const MyModel = require('../../models/model')

exports.listComments= async (req, res, next) => {
    let dataR = {
        status: 1,
        msg: "ok"
    }

    let dieu_kien =null;
    if(typeof(req.query.name)!='undefined'){
        let name =req.query.name;
        dieu_kien={name:name};
        console.log(dieu_kien);
    }
    //code xử lý lấy danh sách
    let list = []
    try {
        list = await MyModel.commentModel.find(dieu_kien).populate("id_user").populate("id_comic");
        dataR.data = list;
    }
    catch (err) {
        dataR.msg = err.message;
    }

    //trả về client
    res.json(dataR);
    console.log(dataR);
}

exports.listCommentUp = async (req, res, next) => {
    let dataR = {
        msg: "list"
    }

    let dieu_kien =null;
    if(typeof(req.query._id)!='undefined'){
        let _id =req.query._id;
        dieu_kien={_id:_id};
        console.log(dieu_kien);
    }
    //code xử lý lấy danh sách
    let list = []
    try {
        list = await MyModel.commentModel.findById(req.params.idcomment);
        dataR.data = list;
    }
    catch (err) {
        dataR.msg = err.message;
    }

    //trả về client
    res.json(dataR);
    console.log(dataR);
}

exports.addComment =async (req, res, next) => {
    let dataR = {
        status: 1,
        msg: "ok"
    }
    if(req.method =='POST'){
        // xử lý ghi CSDL ở đây
        // kiểm tra hợp lệ dữ liệu ở chỗ này.


        // tạo đối tượng model 
        let objComment = new MyModel.commentModel();
        objComment.comment = req.body.comment;
        objComment.date = new Date();
        objComment.id_user=req.body.id_user;
        objComment.id_comic=req.body.id_comic;
;

        
        try{
            let dataR = await objComment.save();
            
            console.log(dataR);

            console.log("Đã ghi thành công");
           
        }catch(err){
            console.log(err);
            dataR.msg = err.message;
        }
 
    }

    //code xử lý add


    //trả về client
    res.json(dataR)

}

exports.updateComment =async (req, res, next) => {
    let data = {
        status: 1,
        msg: "update"
    }

    if(req.method =='PUT'){

    
        try{
            await MyModel.commentModel.updateOne({_id:req.params.idcomment},{$set: {comment:  req.body.comment, date:  new Date(),id_user:req.body.id_user,id_comic:req.body.id_comic}});
            console.log(data);

            console.log("Đã cập nhật thành công");
           
        }catch(err){
            console.log(err);
            data.msg = err.message;
        }
 
    }
    res.json(data)

}

exports.deletecomment =async (req, res, next) => {
    let data = {
        status: 1,
        msg: "delete"
    }

    let objUser = await MyModel.commentModel.findById(  req.params.idcomment  );
    console.log( objUser);
        
        try{
             
            // update dữ liệu
            // await myModel.spModel.updateOne( {_id:  req.params.idsp},   objSP );
             await MyModel.commentModel.findByIdAndDelete({_id:req.params.idcomment});

            console.log("Đã xóa thành công");
        }catch(err){
            console.log(err);
            msg ='Lỗi '+ err.message;

        }
    res.json(data)

}
