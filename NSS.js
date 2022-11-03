const app = require('express')();
const PORT = 8080;


var personnel = {
     Ivan:{
        "fullname": "Ivan Sosu",
        "age":24 ,
        "dob": "20, May, 1998",
        "complexion": "Chocolate",
        "marital status": "Single" 
         },
         
            Karen:{
                "occupation": "Software Engineer",
                "gender":"female",
                "marital status":"Single",
                "complexion":"Chocolate"
              }
         ,
         
            Dennis:{
                "height": 1.9 ,
                "weight": 82
            }       
}; 
//  console.log(Object.entries(personnel));
 Object.entries(personnel).forEach((item)=>{
    // item.forEach((i)=>{
    //     if(i[0]==="Karen"){
    //         console.log(i[1])
    //     }else{
    //         console.log("Unavailable user")
    //     }
    // })
    console.log(item.forEach((i)=>(console.log(i))))
 
 })

 app.listen(
     PORT,
     () => console.log(`It is alive on http://localhost:${PORT}`)
 )

   app.get('/getNSPData', (req,res) => {
    res.status(200).send(personnel)
    // console.log(personnel)
     })

 app.get('/getNSPData/:id', (req,res) => {
     let id = req.params.id;
     console.log(item)

    //  Object.entries(personnel).forEach((item)=>{
    //     item.forEach((i)=>{
    //         if(i[0]===id){
    //             res.status(200).send(i[1])
    //         }else{
    //             res.status(200).send("Unavailable user")
    //         }
    //     })
     
    //  })
     
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

