const app = require('express')();
const PORT = 8080;


var personnel = [
     {Ivan:{
        "fullname": "Ivan Sosu",
        "age":24 ,
        "dob": "20, May, 1998",
        "complexion": "Chocolate",
        "marital status": "Single" 
     }},
         
           {Karen:{
                "occupation": "Software Engineer",
                "gender":"female",
                "marital status":"Single",
                "complexion":"Chocolate"
              }
            },
         
            {Dennis:{
                "height": 1.9 ,
                "weight": 82
            }       
}]; 
console.log(personnel);

 app.listen(
     PORT,
     () => console.log(`It is alive on http://localhost:${PORT}`)
 )

   app.get('/getNSPData', (req,res) => {
    res.status(200).send(personnel)
    // console.log(personnel)
     })

 app.get('/getNSPData/Ivan', (req,res) => {
     res.send(personnel[0])    
    })

 app.get('/getNSPData/Karen', (req,res) => {
        res.send(personnel[1])    
       })

 app.get('/getNSPData/Dennis', (req,res) => {
        res.send(personnel[2])    
       })
// console.log(personnel)

//endpoint to get list of users
// app.get('/getNSPData',function(req,res){
//         console.log(personnel);
//         res.send(personnel);
// })

// //listening to port 8080
// var server =app.listen(8080,function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("REST API demo app listening at http://%s:%s", host, port)
// })

