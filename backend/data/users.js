import bcrypt from 'bcryptjs'

const users = [{
    name:'Admin User',
    email:'admin@dmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:false,
},{
    name:'John User',
    email:'john@dmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:false,
},{
    name:'Jane User',
    email:'jane@dmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:false,
},{
    name:'Rahul User',
    email:'rahul@dmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:false,
},{
    name:'subodh User',
    email:'subodh@dmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:false,
},{
    name:'pramod User',
    email:'pramod@dmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin:false,
}
]

export default users;