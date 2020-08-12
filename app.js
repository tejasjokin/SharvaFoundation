const express = require("express");
const path = require("path");

const app = express();

const mongoose = require('mongoose');
const bodyparser=require("body-parser");
mongoose.connect('mongodb://localhost/SharvaFoundation', {useNewUrlParser: true,useUnifiedTopology: true}); //name of data base

 
const port = 80;

//mongoose schema

const JoinUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    blood_group: String,
    cause: String

  });

const Volunteer = mongoose.model('Volunteer', JoinUsSchema);



const DonateSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    country: String,
    pincode: String
  });

const Donate = mongoose.model('Donate', DonateSchema);

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    textmessage: String,
  });

const Contact = mongoose.model('Contact', ContactSchema);




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/payment', (req, res)=>{
    
    const params = {}
    res.status(200).render('payment.pug', params);
})
app.get('/donate', (req, res)=>{
    
    const params = {}
    res.status(200).render('donate.pug', params);
})
app.get('/joinus', (req, res)=>{
    
    const params = {}
    res.status(200).render('joinus.pug', params);
})
app.get('/contact', (req, res)=>{
    
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.get('/form', (req, res)=>{
    
    const params = {}
    res.status(200).render('form.pug', params);
})




//for volunteers form 
app.post('/joinus', (req, res)=>{

    var myData=new Volunteer(req.body);
    myData.save().then(()=>{
        res.redirect(301,'/joinus');
    }).catch(()=>{
        res.status(400).send("Unable to submit form please try again")
    });

})

//for doners form
app.post('/donate', (req, res)=>{

    var myData=new Donate(req.body);
    myData.save().then(()=>{
        res.render( 'payment.pug');
    }).catch(()=>{
        res.status(404).send("Unable to submit form please try again")
    });

})


//for contact form
app.post('/contact', (req, res)=>{
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.redirect( 301,'/contact');
    }).catch(()=>{
        res.status(404).send("Unable to submit form please try again")
    });
})






app.get('/events', (req, res)=>{
    
    const params = {}
    res.status(200).render('events.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});