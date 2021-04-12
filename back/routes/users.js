import express from 'express';
import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', function(req, res, next) {
    User.find().then((users) => {
        console.log('users', users);
        res.send(users);
    });
});

router.post('/login',(req,res,next)=>{
    let errors = [];

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user) {
        if (!user) {
            errors.push({msg: 'Compte introuvable'});
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    res.status(200).json([{msg: 'SUCCESS'}, {user: user}])
                } else {
                    errors.push({msg: 'Mot de passe incorrect'});
                }
            });
        }
    });
    res.status(200).json(errors)
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
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address
    })

    user.save().then(userSaved => {
        res.send(userSaved)
    })
});

router.get('/cart/', function(req, res, next) {
    User.find().then((users) => {
        console.log('users.cart', users.cart);
        res.send(users.cart);
    });
});

router.post('/cart/add/', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user) {
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    user.cart.push(req.body.item);
                    user.save();
                    res.status(200).json({msg: "Ajouté avec succès"})
                }
            });
        } else {
            res.status(200).json({msg: "Utilisateur introuvable"})
        }
    });
});

router.post('/cart/remove/', (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user) {
        if (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    user.cart.forEach(function (value, i) {
                        if (req.body.item == user.cart[i]) {
                            user.cart.splice(i, 1);
                            user.save();
                            res.status(200).json({msg: "Ajouté avec succès"})
                        }
                    });
                }
            });
        } else {
            res.status(200).json({msg: "Utilisateur introuvable"})
        }
    });
});
export default router;
