const express = require('express');
const app = express();
const port = 3000;

const db = require('./models');
app.use(express.static('public'));

app.set('view engine', 'ejs')

//body parser 
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

app.use(require('./routes/index'))
app.use(require('./routes/newDish'))

const createRecords = async () => {
    await db.user.create({firstName: 'Yvonne',lastName: 'Zertuche',email: 'yzertuche@outlook.com'}),
    await db.user.create({firstName: 'Veronica',lastName: 'Lino',email: 'vlino@dc.com'}),
    await db.user.create({firstName: 'Shannon',lastName: 'Knorr',email: 'sknorr@dc.com'}),
    await db.user.create({firstName: 'Nomi',lastName: 'Kahn',email: 'nkahn@dc.com'}),
    await db.user.create({firstName: 'Veronica',lastName: 'Taucci',email: 'veroT@dc.com'})
}


// createRecords()

const findAll = async () => {
    let records = await db.user.findAll()//[{}, {},{}]
    //console.log(records)

    records.forEach(record => {
        console.log(`${record.firstName}, ${record.lastName}, ${record.email}`)
    })
}

// findAll() 

const getByKey = async (key) => {

    let record = await db.user.findByPk(key)

    console.log(record)
}

// getByKey(6)

const findWhere = async () => {
    let records = await db.user.findAll({where: {lastName: "Zertuche"}})
    records.forEach(record => {
        console.log(`${record.firstName} ${record.lastName}`)
    })
}

// findWhere()

const deleteRecord = (id) => {

    db.user.destroy({where: {id: id}})  
}

// deleteRecord(6)

const updateRecord = async () => {

    db.user.update({email: 'Beyonce@dc.com'}, {where: {firstName: 'Beyonce'}})  
}

// updateRecord()

const createBlogs  = () => {
    db.blogs.create({title:"JS", body: "blah blah blah", userID: 1}),
    db.blogs.create({title:"Prototype", body:"blogs blogs blogs", userID: 2})
    db.blogs.create({title:"Sequelize", body:"huh?, what? duh?", userID: 3})
    db.blogs.create({title:"Finding My Happy Place", body: "In a bottle", userID: 4}) 
}

// createBlogs()

const findBlogs = async ()=> {
    let blogs = await db.blogs.findAll({
        include: [{
            model: db.user,
            required: true // NEEDED for an inner join
        }]
    })

    blogs.forEach(blog=> {
        console.log(`${blog.title}, ${blog.user.firstName}, ${blog.user.lastName}`)
    })
}
// findBlogs()

const findUserBlogs = async () => {
    let users = await db.user.findAll({include: [{   
        model: db.blogs,
        required: true,
    }  
  ]}) 
}

// findUserBlogs()

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})