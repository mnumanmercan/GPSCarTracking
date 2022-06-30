
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');
const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'


const app = express();

const myCon = require('./databases/mysql');


myCon.connect((err) => {
    if (err) {
        throw err;
    } else {
        myCon.query('SELECT * FROM users', (err, result, fields) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
            }
        })

    }
})



app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
/*app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
*/





app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {

    res.render('login');
})

app.get('/hello', (req, res) => {

    res.render('hello');
})

app.post('/deneme', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        myCon.query('SELECT * FROM users WHERE username = ? and password = ?', [username, password], (err, result, fields) => {
            if (result.length > 0) {

                mongoClient.connect(url, (err, client) => {
                    if (err) throw err;

                    const mydb = client.db('Cars');
                    console.log('MongoDB baglantisi basariyla gerceklestirildi...');
                    var mySort = { Car_ID: -1 };
                    mydb.collection("MNM'sCar").find().sort(mySort).toArray((err, result) => {
                        if (err) throw err;
                       console.log(result);

                        client.close();

                    })
                })

                var name = 'Numan';
                res.redirect('/hello');
            } else {

                console.log('Kullanici yok')
                res.render('login');
            }
        })
    }
})

app.get('/logout', (req, res) => {
    res.render('login');
})

app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(3000, () => {
    console.log("3000 portu dinleniyor");
})