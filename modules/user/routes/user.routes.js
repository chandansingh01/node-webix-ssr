module.exports = (app) => {

      const controller = require('../controller/user.controller');

      app.route('/api/users')
            .get(controller.read)
            .post(controller.create)

      app.route('/api/user/:id')
            .post(controller.update)
            .delete(controller.delete)




}