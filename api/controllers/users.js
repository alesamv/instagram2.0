import { User } from '../models/user'
import  bcrypt  from "bcryptjs";

export function createUser(req,res){
    try {
        const { name, user_name, email, password } = req.body
        /*const name = req.body.name
        const user_name = req.body.user_name
        const email = req.body.email
        const password = req.body.password
        console.log(req.body)*/

        const newUser = new User({
            user_name: user_name,
            name: name,
            email: email,
            password: bcrypt.hashSync(password,10)
        })
        newUser.save((err, userSave) =>{
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: "ERROR al crear usuario",
                    error: err
                })
            } else {
                res.status(201).json({
                    ok:true,
                    user: userSave
                })
            }
        })
        console.log(req.body)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Hay problemas en nuestro servidor'
        })
    }
}

