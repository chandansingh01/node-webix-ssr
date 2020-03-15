module.exports = (app)=>{
 require('./routes/user.routes')(app);
 require('./routes/roles.routes')(app);
}