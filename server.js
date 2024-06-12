
import express from 'express';

const app = express();


//Example app to handle different requests
app.get('/', (req, res) => {
    res.send('Hello Express!');
});


//Get user by id 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ${id}`);
});


//Post user by id
app.post('/users', (req, res) => {
    const user = req.body;
    res.send(user);         
})


//Update user by id
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update user ${id}`);
})


//Delete user by id
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete user ${id}`);
})


app.listen(3000,()=>{
    console.log('Listening on port 3000');
});