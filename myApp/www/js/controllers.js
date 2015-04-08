angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HelpCtrl', function($scope){
    $scope.name = "Some help text";
});
