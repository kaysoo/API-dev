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
             },

     Dennis:{
               "height": 1.9 ,
               "weight": 82
           }      
}; 


app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
)

    app.get('/getNSPData', (req,res) => {
     res.status(200).send(personnel)
    })

    
