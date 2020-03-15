let users = [
 {id:1,name:'Chandan singh',email:'chandan_92@outlook.com',role:'Admin'}
]

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
   
    return false
}

exports.read = (req, res) => {
      try {
            res.send(users);
      } catch (error) {
            res.status(500).send('API failure')
      }
}

exports.create = (req, res) => {
      try {
            if (req.body.email.trim() === '' || req.body.name.trim() === '') {
                  res.status(500).send('Please fill the required fields!!')
            }
            else if (!ValidateEmail(req.body.email)) {
                  res.status(500).send('Please enter correct email address!!')
            }
            let user = users.find((item) => item.email === req.body.email);
            if (user) {
                  res.status(500).send('User Email already exist !!')
            }
            else {
                  randomID = Math.floor(Math.random() * 10) + 1;
                  users.push({ ...req.body, id: randomID });
                  res.json({ success: true, message: 'User created successfully!!' })
            }
      } catch (error) {
            console.log(error);            
            res.status(500).send('API failure')
      }
}

exports.update = (req, res) => {
      try {
            if (req.body.email.trim() === '' || req.body.name.trim() === '') {
                  res.status(500).send('Please fill the required fields!!')
            }

            let user = users.findIndex((item) => parseInt(item.id) === parseInt(req.params.id));
            if (user < 0) {
                  res.status(500).send('Select a user to update!!');
            }
            else {
                  users[user] = req.body;
                  res.json({ success: true, message: 'User updated successfully!!' })
            }


      } catch (error) {
            res.status(500).send('API failure')
      }
}

exports.delete = (req, res) => {

      try {
            let user = users.findIndex((item) => parseInt(item.id) === parseInt(req.params.id));
            if (user < 0) {
                  res.status(500).send('Select user to delete!!');
            }
            else {
                  users.splice(user, 1);
                  res.json({ success: true, message: 'User Deleted !!' })
            }


      } catch (error) {
            res.status(500).send('API failure')
      }

}