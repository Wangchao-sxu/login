const REGISTER = require('./../../model/REGISTER')
function registerOne(req,res){
    // console.log(req.body)
    REGISTER.find({name:req.body.name}).then((result)=>{
        if(result.length>0){
            res.json({
                code:0,
                msg:"当前用户已经注册"
            })
        }else if(result.length == 0){
            REGISTER.create({
                name:req.body.name,
                password:req.body.password,
                username:req.body.username,
                checkPass:req.body.checkPass
            }).then(()=>{
                res.json({
                    code:1,
                    msg:"注册成功"
                })
            },()=>{
                res.json({
                    msg:"注册失败，请稍后重试",
                    code:0
                })
            })
        }
    })
}

module.exports = registerOne