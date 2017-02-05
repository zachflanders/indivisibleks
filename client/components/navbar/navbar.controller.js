'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
    'title': 'Event Calendar',
    'state': 'events'
  },
{
  'title': 'Get Involved',
  'state': 'get-involved'
},
{
  'title': 'Updates',
  'state':  'updates'
}];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.closeAlert = function(){
      $('#alert-bar').hide();
    }
  }
}

angular.module('indivisibleks2App')
  .controller('NavbarController', NavbarController);
