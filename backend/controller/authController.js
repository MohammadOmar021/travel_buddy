import userModel from "../Models/userSchema.js";
import bcrypt from 'bcrypt'

export const SignupController = async (req,res)=>{
    try {
        const {email, phoneNumber, password} = req.body

        if(!email || !phoneNumber || !password){
           return res.json({
                message : "Required fields are Missing!",
                status: false
            });
        }

         const user =await userModel.findOne({email});
        
        if(user){
           return res.json({
                message: "User already Exist!",
                status: false
            })
        }

        const hashpassword =await bcrypt.hash(password, 10)

        const userObj = {
            ...req.body,
            password: hashpassword
        }

        await userModel.create(userObj)
       return res.json({
            message:"User Successfully Created!",
            status: true
        })

    } catch (error) {
           return res.json({
                message:"Something went wrong",
                status: false
            })
    }
}

export const LoginController = async (req, res)=>{

    try {
            const {email, password} = req.body
        if(!email || !password){
            return res.json({
                message: "Required fields are missing",
                status: false
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.json({
                message: "User doesn't Exist",
                status: false
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.json({
                message: "Email or Password is invalid",
                status: false
            })
        }

        return res.json({
            message: "Login SUccessFull",
            status: true,
            data: user.email
        })
        console.log("user",user)
    } catch (error) {
        
    }

}