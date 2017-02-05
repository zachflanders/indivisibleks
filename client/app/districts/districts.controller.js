'use strict';
(function(){

class DistrictsComponent {
  constructor($http) {
    this.message = 'Hello';
    var vm = this;
    vm.district = ''
    this.getDistrict = function(zip){
      console.log(zip);
      $http.get('https://congress.api.sunlightfoundation.com/districts/locate?zip='+zip).then(response => {
        if(response.data.results.length > 0){
          if(response.data.results[0].state == "KS"){
            vm.district = response.data.results[0].district;
            console.log(vm.district);
            $('#result').html('<h3>You are in Kansas District ' + vm.district +"</h3><img src='assets/images/Kansas"+vm.district+".svg' alt='Kansas map' width='100%'>");
          }
          else{
            $('#result').html("<h3>Sorry, you're not in Kansas</h3><img src='assets/images/notKansas.gif' alt='Kansas map' width='100%'>");
          }
        }
        else{
          $('#result').html("<h3>Sorry, you're not in Kansas</h3><img src='assets/images/notKansas.gif' alt='Kansas map' width='100%'>");
        }

      });
      $http.get('https://api.propublica.org/congress/v1/',
        {headers: { Authorization: 'X-API-Key:IfFiiCbm6b6iUKwcbhxaH3FCUdYSMqbf2W36fsfh'}})
          .then(function(response) {
            console.log(response);
    });
    }
  }
}

angular.module('indivisibleks2App')
  .component('districts', {
    templateUrl: 'app/districts/districts.html',
    controller: DistrictsComponent
  });

})();
