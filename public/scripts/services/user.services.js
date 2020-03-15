export function loadUser() {
      $$("user_table").load(async function(){
            try {
                  let users = await webix.ajax().get('/api/users');
                  return users;                  
            } catch (error) {
                  console.log(error);            
                  webix.message({type:"error", text:error.response});
      
            }
            
      });  
}

export async function createUser() {
      try {
            let user = $$("user_form").getValues();
            let result = await webix.ajax().post('/api/users',user);
            let data = result.json();
            if (data.success) {                 
                  webix.message(data.message);
                  $$("user_table").refresh();
                  loadUser();
            }
      } catch (error) {
            console.log(error);            
            webix.message({type:"error", text:error.response});
      }
}

export async function updateUser() {
      try {
            let user = $$("user_form").getValues();
            let result = await webix.ajax().post(`/api/user/${user.id}`,user);
            let data = result.json();
            if (data.success) {                 
                  webix.message(data.message);
                  loadUser();
            }
      } catch (error) {
            console.log(error);            
            webix.message({type:"error", text:error.response});
      }
}

export async function deleteUser() {
      try {
            let user = $$("user_form").getValues();
            let result = await webix.ajax().del(`/api/user/${user.id}`,user);
            let data = result.json();
            if (data.success) {               
                  $$("user_table").remove(user.id);  
                  webix.message(data.message);
                  loadUser();
            }
      } catch (error) {
            console.log(error);            
            webix.message({type:"error", text:error.response});
      }
}