import { loadRole,createRole,updateRole,deleteRole } from "../services/roles.services.js";
let role ={

}

const window_view = {
     
      rows: [
             {   
                  
                  cols: [
                        {
                              id: 'roles_table',
                              view: "datatable",
                              height:500,                              
                              select: "row",  
                                                         
                              on: {
                                    onSelectChange: function () {
                                          var item = $$("roles_table").getSelectedItem();
                                          if (!item) {
                                                return;
                                          }
                                          role = item;
                                          $$("form_role_id").define("value", item.id);                                          
                                          $$("form_role_name").define("value", item.name);                                          
                                          $$("form_role_name").refresh();
                                          $$("form_role_id").refresh();
                                          
                                    },
                              },
                              columns: [
                                    { id: "name", header: "Name", fillspace: true },
                                    
                              ],                              
                        },
                        {
                              view: "form",
                              id: "roles_form",                                                                                       
                              elements: [
                                    { view: "text", id: 'form_role_id',hidden:true,label: "id", name: "id", value: ''},
                                    { view: "text", id: 'form_role_name', value:'',name: "name",placeholder:"Enter Role"},                                    
                                    {
                                          margin: 5, cols: [
                                                {
                                                      view: "button", value: "Save", css: "webix_primary",
                                                      click: createRole
                                                },
                                                { view: "button", value: "Update", css: "webix_primary",
                                                click: updateRole },
                                                { view: "button", value: "Delete", css: "webix_danger",
                                                click: deleteRole }
                                          ]
                                    }
                              ]
                        }
                  ]
            }

      ]

}


export const modal = webix.ui({
      view:"window",
      maxWidth:500, height:400,  
      responsive:true,          
      position:"top",            
      head:'Roles',
      close:true,
      body:webix.copy(window_view)
})


loadRole();
