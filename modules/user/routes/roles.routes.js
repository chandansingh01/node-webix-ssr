module.exports = (app) => {

      const controller = require('../controller/roles.controller');

      app.route('/api/roles')
            .get(controller.read)
            .post(controller.create)

      app.route('/api/role/:id')
            .post(controller.update)
            .delete(controller.delete)




}