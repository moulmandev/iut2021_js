import express from 'express';
import { User } from '../models/user.model.js';
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', function(req, res, next) {
    User.find().then((users) => {
        console.log('users', users);
        res.send(users);
    });
});

router.post('/login',(req,res,next)=>{
    res.status(200).json("toto")
})

router.post('/register',(req,res)=>{
    const { name, email, password, password_repeat} = req.body;
    let errors = [];

    if(!name || !email || !password || !password_repeat) {
        errors.push({msg : "Please fill in all fields"})
    }

    if(password !== password_repeat) {
        errors.push({msg : "Passwords do not match"});
    }

    if(errors.length != 0 ) {
        User.findOne({email : email}).exec((err,user)=>{
            console.log(user);
            if(user) {
                errors.push({msg: 'Email already registered'});
            } else {
                const newUser = new User({
                    firstname : firstname,
                    lastname : lastname,
                    email : email,
                    password : password
                });

                bcrypt.genSalt(10,(err,salt) =>
                    bcrypt.hash(newUser.password,salt,
                        (err,hash)=> {
                            if(err) throw err;

                            newUser.password = hash;

                            newUser.save()
                                .then((value)=>{
                                    console.log(value)
                                }).catch(value=> console.log(value));
                        }));
            }
        })
    } else {
        res.status(200).json(errors)
    }
})

router.get('/logout',(req,res)=>{
    res.status(200).json(parkings)
})

router.post('/', (req, res, next) => {
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(req.body.address);

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    })

    user.save().then(userSaved => {
        res.send(userSaved)
    })
});

export default router;

