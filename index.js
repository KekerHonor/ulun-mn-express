const express = require('express')

const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

app.use(express.json())

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


var a = 5;
var b = 10;



app.get('/', (req, res)=>{
    res.send('Hello, this is Express + TypeScript');
});


app.get('/get', (req, res)=>{
    res.send(students)
})
const students = [
    {name: 'John', email: "asdasd"}, 
    {name: 'John', email: "asdasd"}
]

app.post('/post', (req, res)=>{
try {
    students.push({name: 'aaa', email:"bbb"})
    res.send("Amjilttai")
} catch (err) { 
    res.send(err)
}
})

app.delete('/delete', (req, res)=>{
    try {
        students.pop()
    } catch (err) {
    
    }
})


app.post('/body', (req, res)=> {
    console.log(req.body)
    console.log(req.body.name)
    res.send(req.body.email)
})

app.post('/sum', (req, res)=>{
    sum = req.body.a + req.body.b
    console.log("Sum: " + sum)
    res.send("Sum: " + sum)
})

app.get('/compare', (req, res)=>{
    if(a>b) {
        return res.send(a)
    } else {
        return res.send(b)
    }
})


app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});