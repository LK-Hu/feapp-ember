// app/controllers/sign-in.js

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticatior:devise',
  userName: '',
  password: '',
  actions: {
    login: function () {
      this.set('user.userName',this.get('userName'));
      this.set('user.password',this.get('password'));
      this.get('user').save();
    }
  }

});