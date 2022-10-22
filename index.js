const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname',(req,res) => {
    res.send('Chutima Pamee')
})

app.get('/getabout',(req,res) => {
    let data = {
        name: 'Chutima Pamee' ,
        age: 20,
        email: 'chutima.pame@bumail.net' ,
        address: 'Singburi Thailand'
    }
    res.send(data)
})

app.get('/getproject',(req,res) => {
    let data = {
        project_name: 'กราฟฟิก smo bu' ,
        project_description: 'ภาพกราฟฟิกที่ทำให้มอเราทั้งหมด' ,
        project_link: 'https://drive.google.com/drive/folders/1donRYeDaVFf2ryHoGGfDrFd5MmTnN7fZ?usp=sharing'
    }
    res.send(data)
})

app.get('/getcontact',(req,res) => {
    let data = {
        address: 'Singburi Thailand',
        email: 'chutima.pame@bumail.net' ,
        phone_number: '0623507813'
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('start sever at port 3000.')
})
