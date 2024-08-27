import user from '../../../dp/user.model.js'


export const getalluser =async (req,res,next)=>{
    // const user = await user.findAll({
    //     where:{
    //         role:req.query.role // get all admin with (? role=admin)
    //     }
        
    // }) // all users
    // const userss = await user.findOne({  // uniqe email
    //     where:{
    //         email:req.query.email 
    //     }
    // }) 


    // const users = await user.findByPk(req.query.id ) // id especialid


   const users = await user.findAndCountAll({  // uniqe email
        where:{
            role:req.query.role 
        }
    }) 


    console.log({users})
    res.json({
        message: 'all useres',
        users
    })
}


// findall,finders,findbypl,fineone,findandcountall,findsDrcreate


// ==================  ad user api==================
// create, 
// bulkcreate // return in array 
// ,findorcreate, 
// findcreatefind



export const adduser = async (req,res,next)=>{
    const {name,email,password,role} = req.body

    const isemailcheak = await user.findOne({
        where:{
            email:email
        }
    })
    if(isemailcheak){
        return res.json({message:'email is alreaduy exist'})
    }
    const newuser = await user.create({name,email,password,role})
    console.log(newuser)
    if(newuser._options.isNewRecord){
        return res.json({
            message:"added"
        })
    }
    return ({message:"failed"})
}