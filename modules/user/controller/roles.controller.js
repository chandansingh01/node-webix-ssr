let roles = [
      {id:1,name:'Admin'}
     ]
     
     
     exports.read = (req, res) => {
           try {
                 res.send(roles);
           } catch (error) {
                 res.status(500).send('API failure')
           }
     }
     
     exports.create = (req, res) => {
           try {
                 if (req.body.name.trim() === '') {
                       res.status(500).send('Please fill the required fields!!')
                 }
                 let role = roles.find((item) => item.name === req.body.name);
                 if (role) {
                       res.status(500).send('role already exists !!')
                 }
                 else {
                       randomID = Math.floor(Math.random() * 10) + 1;
                       roles.push({ ...req.body, id: randomID });
                       res.json({ success: true, message: 'role created successfully!!' })
                 }
           } catch (error) {
                 console.log(error);                 
                 res.status(500).send('API failure')
           }
     }
     
     exports.update = (req, res) => {
           try {
                 if (req.body.name.trim() === '') {
                       res.status(500).send('Please fill the required fields!!')
                 }
     
                 let role = roles.findIndex((item) => parseInt(item.id) === parseInt(req.params.id));
                 if (role < 0) {
                       res.status(500).send('Select a role to update!!');
                 }
                 else {
                       roles[role] = req.body;
                       res.json({ success: true, message: 'role updated successfully!!' })
                 }
     
     
           } catch (error) {
                 console.log(error);                 
                 res.status(500).send('API failure')
           }
     }
     
     exports.delete = (req, res) => {
     
           try {
                 let role = roles.findIndex((item) => parseInt(item.id) === parseInt(req.params.id));
                 if (role < 0) {
                       res.status(500).send('Select role to delete!!');
                 }
                 else {
                       roles.splice(role, 1);
                       res.json({ success: true, message: 'role Deleted !!' })
                 }
     
     
           } catch (error) {
                 console.log(error);                 
                 res.status(500).send('API failure')
           }
     
     }