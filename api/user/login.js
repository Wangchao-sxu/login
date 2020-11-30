const REGISTER = require('./../../model/REGISTER')
function login(req,res){
    console.log(req.body)
    REGISTER.find({name:req.body.name}).then((result)=>{
        if(result.length>0){
            REGISTER.find({password:req.body.password}).then((result)=>{
                if(result.length==1){
                    res.json({
                        code:1,
                        msg:"登录成功"
                    })
                }else{
                    res.json({
                        code:0,
                        msg:"密码错误"
                    })
                }
            })
        }else{
            res.json({
                code:0,
                msg:"用户未注册"
            })
        }
    })
}
module.exports = login