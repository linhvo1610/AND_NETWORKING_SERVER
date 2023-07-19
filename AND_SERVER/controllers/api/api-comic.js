const MyModel = require('../../models/model')

exports.listComics = async (req, res, next) => {
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
        list = await MyModel.comicModel.find(dieu_kien);
        dataR.data = list;
    }
    catch (err) {
        dataR.msg = err.message;
    }

    //trả về client
    res.json(dataR);
    console.log(dataR);
}



// exports.addUsers =async (req, res, next) => {
//     let dataR = {
//         status: 1,
//         msg: "ok"
//     }
//     if(req.method =='POST'){
//         // xử lý ghi CSDL ở đây
//         // kiểm tra hợp lệ dữ liệu ở chỗ này.


//         // tạo đối tượng model 
//         let objUser = new MyModel.usersModel();
//         objUser.email = req.body.email;
//         objUser.username = req.body.username;
//         objUser.password=req.body.password;
//         objUser.role = 'User';
        
//         try{
//             let dataR = await objUser.save();
            
//             console.log(dataR);

//             console.log("Đã ghi thành công");
           
//         }catch(err){
//             console.log(err);
//             dataR.msg = err.message;
//         }
 
//     }

//     //code xử lý add


//     //trả về client
//     res.json(dataR)

// }

// exports.updateUsers = (req, res, next) => {
//     let data = {
//         status: 1,
//         msg: "ok"
//     }

//     //code xử lý update


//     //trả về client
//     res.json(data)

// }

// exports.deleteUsers = (req, res, next) => {
//     let data = {
//         status: 1,
//         msg: "ok"
//     }

//     //code xử lý  delete


//     //trả về client
//     res.json(data)

// }