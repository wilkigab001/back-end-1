const express = require("express")

const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

//code here
let friends = ['john','gabe', 'will', 'mason','lane','adam']

app.get("/api/users", (req, res) => {
    res.status(200).send(friends);
})

// app.delete("api/users", (req, res) => {
//     let existingFriend = req.params.friends
//     for( i = 0; i < friends.length; i++){
//         if(users[i].username === existingFriend){
//             friends.splice(i, 1)
//             res.status(200).send('User Deleted')
//             return
//         }
//     }
//     res.status(400).send('User not found.')
// })

app.post("/api/users", (req, res) => {
    console.log(req.body)
    friends.push(req.body.test)
    res.status(200).send(friends)
})


app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
})

app.listen(4000, () => console.log('Server running on port 4000'))