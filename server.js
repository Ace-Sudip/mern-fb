const express = require('express');

const dbConnect = require('./db')
const app = express();
app.use(express.json())
const path = require('path'); 

const usersRoute = require('./routes/userRoute')

app.use('/api/users', usersRoute)

// if(process.env.NODE_ENV === 'production')
// {
//     app.use('/', express.static('client/build'))
//     app.get('*' , (req,res)=>{
//         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
//     })
// }

//static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Node server started.'));




