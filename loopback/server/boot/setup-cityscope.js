module.exports = function(app) {
  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var ACL = app.models.ACL;

  var cityscopeCredential='';
  process.argv.forEach(function(element){

    var valueArray = element.split('=');
    if (valueArray[0]=='cityscope-credential')
    {
      cityscopeCredential=valueArray[1];
    }
  });

  if (cityscopeCredential)
  {
    console.log('Setting credential.');
    User.upsert({id: '1', username: 'cityscope-user', email: 'richard.good@ed.ac.uk',password: cityscopeCredential}, function(err, user) {
      if (err) return console.log(err);

      console.log("User created."+user);
      // Create the admin role
      Role.upsert({
        name: 'admin'
      }, function(err, role) {
        if (err) return console.log(err);
        console.log("Role created."+role);

        // Make Bob an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: user.id
        }, function(err, principal) {
          if (err) return console.log(err);
          console.log("Principal created.");
        });
        ACL.create({principalType: ACL.ROLE,
          principalId: "admin",
          model: ACL.ALL,
          property: ACL.ALL,
          accessType: ACL.ALL,
          permission: ACL.ALLOW},
          function (err, acl)
          {
            if (err!=null)
            {
              console.log("Error:"+err);
            }
            else {
                  console.log("ACL created.");
            }


          });
      });

    });
  }

};
