(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

// <h1>Lunch Checker</h1>
// <ol>Note for the reviwer:
//   <li>I have not counted empty strings as a valid input. Hence, an iput like a,b,,,,,c is stil considered as 3 valid elements</li>
//   <li>For a valid input, the message text will change color appropriately</li>
//   <li>When the user is typing, no message will be displayed</li>
// </ol>
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

//clear the message when user is typing
  $scope.clearMessage = function () {
    $scope.message = "";
    $scope.borderColor = {};
  };
  $scope.checkLunchMenu = function () {
    let menuItems = $scope.lunchMenu.split(",");
    //remove empty strings from the user input
    menuItems = menuItems.filter(Boolean);
    if (menuItems.length > 3) {
      $scope.message = "Too Much!";
      //change font and border color for the message
      $scope.fontColor = {'color':'green'};
      $scope.borderColor = {'border-color': 'green'}
    } else if (menuItems.length === 0) {
      $scope.message = "Please enter data first";
      $scope.fontColor = {'color':'red'};
      $scope.borderColor = {'border-color': 'red'}
    } else if (menuItems.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.fontColor = {'color':'green'};
      $scope.borderColor = {'border-color': 'green'}
    }
  }

}

})();
