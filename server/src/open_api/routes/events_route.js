var ctrlEvents = require('../controllers/eventcontrollers');
console.log("insideRoute");

module.exports = function(router) {
    console.log('CSEVENT APIs');
    router
        .route('/api/getUser')
        .get(ctrlEvents.getEventsUser);
    router
        .route('/api/getUser/:id')
        .get(ctrlEvents.getParticularUser);
    router
        .route('/api/deleteUser/:id')
        .get(ctrlEvents.deleteSpecificUser);
    router
        .route('/api/updateUserEmail/:id/:email')
        .get(ctrlEvents.updateSpecificUser);
    router
        .route('/api/login')
        .post(ctrlEvents.loginUser);
}