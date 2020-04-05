

exports.CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS users(
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    Password varchr(255) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
    ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1
  )`;

//Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected');

}); 

const app = express();


//Create table
app.get('/user', (req, res) => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        console.log(result);
        res.send('User table created...')

    });
});

//Insert User 1
app.get('/adduser1', (req, res) =>{
    let user = {title: 'User one', body: 'This is customer number one'};
    let sql = 'INSERT INTO user SET?';
    let query = db.query(sql, user, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Customer 1 added...');

    });

});

//Insert User 2
app.get('/adduser2', (req, res) =>{
    let user = {title: 'User two', body: 'This is customer number two'};
    let sql = 'INSERT INTO user SET?';
    let query = db.query(sql, user, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Customer 2 added...');

    });

});

//Insert User 3
app.get('/adduser3', (req, res) =>{
    let user = {title: 'User Three', body: 'This is Customer number three'};
    let sql = 'INSERT INTO user SET?';
    let query = db.query(sql, user, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Customer 3 added...');

    });

});

//Select a particular User
app.get('/getuser/:id', (req, res) =>{
    let sql = `SELECT * FROM user WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Customer fetched...');

    });

});

//Update User
app.get('/updateuser/:id', (req, res) =>{
    let newTitle = 'Updated Title';
    let sql = `UPDATE user SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('User updated...');

    });

});

//Delete User
app.get('/deleteuser/:id', (req, res) =>{
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Customer deleted...');

    });

});

app.listen('3000', ()=> {
    console.log('Server started on port 3000');

}); 