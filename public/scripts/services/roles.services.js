
export function loadRole() {
      $$("roles_table").load(async function(){
            try {
                  let roles = await webix.ajax().get('/api/roles');
                  let data = roles.json();
                  $$('form_role').define('options',data.map(item=>item.name));
                  $$('form_role').refresh();
                  return roles;                  
            } catch (error) {
                  console.log(error);            
                  webix.message({type:"error", text:error.response});      
            }
            
      });  
}

export async function createRole() {
      try {
            let role = $$("roles_form").getValues();
            let result = await webix.ajax().post('/api/roles',role);
            let data = result.json();
            if (data.success) {                 
                  webix.message(data.message);                  
                  loadRole();
            }
      } catch (error) {
            console.log(error);            
            webix.message({type:"error", text:error.response});
      }
}

export async function updateRole() {
      try {
            let role = $$("roles_form").getValues();
            let result = await webix.ajax().post(`/api/role/${role.id}`,role);
            let data = result.json();
            if (data.success) {                 
                  webix.message(data.message);
                  loadRole();
            }
      } catch (error) {
            console.log(error);            
            webix.message({type:"error", text:error.response});
      }
}

export async function deleteRole() {
      try {
            let role = $$("roles_form").getValues();
            let result = await webix.ajax().del(`/api/role/${role.id}`,role);
            let data = result.json();
            if (data.success) {               
                  $$("roles_table").remove(role.id);  
                  webix.message(data.message);
                  loadRole();
            }
      } catch (error) {
            console.log(error);            
            webix.message({type:"error", text:error.response});
      }
}