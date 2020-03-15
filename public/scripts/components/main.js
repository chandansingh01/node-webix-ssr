import {loadUser,createUser,updateUser,deleteUser} from '../services/user.services.js';
import {modal} from '../components/roles_modal.js';
let user = {
      id: "33",
      name: "",
      email: "",
      role: "Release",
};


webix.ui({
      height: 500,
      rows: [
            {
                  cols: [

                        { view: "template", template: "Users Information With Roles", type: "header" },

                        {
                              view: "toolbar", elements: [
                                    { view: "button", value: "Add New Role", width: 150,click:()=>{modal.show()} },

                              ]
                        }
                  ]

            }, {
                  cols: [
                        {
                              id: 'user_table',
                              view: "datatable",
                              height:500,                              
                              select: "row",
                              on: {
                                    onSelectChange: function () {
                                          var item = $$("user_table").getSelectedItem();
                                          if (!item) {
                                                return;
                                          }
                                          user = item;
                                          $$("form_id").define("value", item.id);
                                          $$("form_name").define("value", item.name);
                                          $$("form_email").define("value", item.email);
                                          $$("form_role").define("value", item.role);
                                          $$("form_name").refresh();
                                          $$("form_email").refresh();
                                          $$("form_role").refresh();                                          
                                    },
                              },
                              columns: [
                                    { id: "name", header: "Username", fillspace: true },
                                    { id: "email", header: "Email", fillspace: true },
                                    { id: "role", header: "Role", fillspace: true }
                              ],                              
                        },
                        {
                              view: "form",
                              id: "user_form",
                              elements: [
                                    { view: "text", id: 'form_id',hidden:true,label: "id", name: "id", value: user.id},
                                    { view: "text", id: 'form_name', label: "Username", name: "name", value: user.name },
                                    { view: "text", id: 'form_email', label: "Email", name: "email", value: user.email },
                                    { view: "select", id: 'form_role', label: "Roles",name:'role', options: ["Master", "Release"], value: user.role },
                                    {
                                          margin: 5, cols: [
                                                {
                                                      view: "button", value: "Save", css: "webix_primary",
                                                      click: createUser
                                                },
                                                { view: "button", value: "Update", css: "webix_primary",
                                                click: updateUser },
                                                { view: "button", value: "Delete", css: "webix_danger",
                                                click: deleteUser }
                                          ]
                                    }
                              ]
                        }
                  ]
            }

      ]
});

loadUser();

