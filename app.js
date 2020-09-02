const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');
//const db = require('./db/db');
//const collectionUser = "users";
const port = 9090;


app.use(express.static('public'));
// roots start here
//route for landing page
app.get('/', (req, res, err) => {
    if (err) {
        res.send(`The page for the URL provided can not be found! 404 ERROR`);
        console.log(`ERROR 404 page not found ${err}`);
    }
    else {
        res.sendFile(path.join(__dirname, "index.html"));
    }

});
//posting logging credentials
app.post('/', (req, res) => {
    res.send(collectionUser.insert(req.body));

    //res.send("logged in successfully");
});

app.get('/register', (req, res) => {

    res.sendFile(path.join(__dirname, 'public/html/register.html'));

});

app.post('/register', (req, res) => {

    res.send("Registration details submitted succesfully");

});

app.get('/about_us', (req, res, err) => {

    res.sendFile(path.join(__dirname, 'public/html/about-us.html'));


});


app.get('/terms', (req, res, err) => {
    if (err) {
        res.send(`The page for the URL provided can not be found! 404 ERROR`);
        console.log(`ERROR 404 page not found ${err}`);
    }
    else {
        res.sendFile(path.join(__dirname, "public/tac.html"));
    }

});
app.listen(port, () =>{
    console.log(`server running on port: ${port}`);
} );


//connection to the database

// db.connect((err)=>{
//     if(err){
//         console.log(`Unable to connect to the database! Kindly start your application again`);
//          process.exit(1)
//     }
//     else{
//         app.listen(port, ()=>{
//             console.log(`Connected to the dtabase and Listening on port ${port}`);
//         });
//     }
// });

// app.use(bodyParser.json());
// const path = require('path');
// //const db = require('./db/db');
// //const collectionUser = "users";
// const port = 9090;  


// app.use(express.static('public'));
// // roots start here
// //route for landing page
// app.get('/',(req,res,err)=>{
//     if(err){
//         res.send(`The page for the URL provided can not be found! 404 ERROR`);
//         console.log(`ERROR 404 page not found ${err}`);
//     }
//     else{
//         res.sendFile(path.join(__dirname, "index.html"));
//     }
    
// });
// //posting logging credentials
// app.post('/', (req, res)=>{
//     res.send(collectionUser.insert(req.body));
    
//    //res.send("logged in successfully");
// });

// app.get('/register',(req,res)=>{
    
//         res.sendFile(path.join(__dirname, 'public/html/register.html'));
    
// });

// app.post('/register', (req,res)=>{
    
//         res.send("Registration details submitted succesfully");
      
// } );

// app.get('/about_us', (req,res,err)=>{
    
//         res.sendFile(path.join(__dirname, 'public/html/about-us.html'));
    
   
// });


// app.get('/terms', (req,res,err)=>{
//     if(err){
//         res.send(`The page for the URL provided can not be found! 404 ERROR`);
//         console.log(`ERROR 404 page not found ${err}`);
//     }
//     else{
//         res.sendFile(path.join(__dirname, "public/tac.html"));
//     }
   
// });



//connection to the database

// db.connect((err)=>{
//     if(err){
//         console.log(`Unable to connect to the database! Kindly start your application again`);
//          process.exit(1)
//     } //     else{ //         app.listen(port, ()=>{
//             console.log(`Connected to the dtabase and Listening on port ${port}`);
//         });
//     }
// });