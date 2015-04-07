// app/controllers/landingpage.js

import Ember from "ember";

export default Ember.Controller.extend({
  init: function(){
    window.fnames = [];
    window.ftypes = [];
    window.fnames[0]='EMAIL';
    window.ftypes[0]='email';
    window.fnames[1]='FNAME';
    window.ftypes[1]='text';
    window.fnames[2]='LNAME';
    window.ftypes[2]='text';
  },
  $mcj:Ember.$.noConflict(true),

});