const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
const roles = (function() {
ac.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant("admin")
 .extend("basic")
 .readAny("profile")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();

module.exports = roles;