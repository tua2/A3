const messageCtrl=require('./MessageCtrl');

module.exports=function (app){
    app.post('/v1/messages',messageCtrl.sendMessage);
    app.get('/v1/messages',messageCtrl.getMessage);
};