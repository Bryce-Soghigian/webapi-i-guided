const express = require('express');
const Hubs = require('./data/hubs-model.js');
const server = express();
server.use(express.json());


const port = 3333;



server.get('/', (req,res) =>{
    res.send('hey bro we up and running with these puppies in our backpacks');
})

//create a hub delete a hub and all that bruther

server.get('/hubs', (req, res) => {
    Hubs.find()
    .then(hubs => {
res.status(200).json(hubs)

    })
    .catch(error=> {
        res.status(500).json({message: 'error with hubs'})
    });
});


server.post('/hubs', (req,res) =>{
    const info = req.body;
Hubs.add(info)

.then(hub => {
res.status(201).json(hub);
}
   
)    .catch(error=> {
        res.status(500).json({message: 'error with posting hubs'})
    });

})



server.listen(port, () => console.log('api running faster than keemstar'));


