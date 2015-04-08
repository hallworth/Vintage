angular.module('starter.controllers', [])
.controller('DashCtrl', function ($scope) {
    $scope.map = {
        center: {
            latitude: 50.8351023,
            longitude: -0.1720476
        },
        zoom: 12,
        bounds: {}
    };
    $scope.options = {
        scrollwheel: false
    };
    $scope.marker = {
        id:0,
        coords: {
            latitude: 50.8351023,
            longitude: -0.1720476
        }
    }
    $scope.markerList = [
        {
            id:0,
            latitude: 50.8351023,
            longitude: -0.1720476
        },
        {
            id:1,
            latitude: 50.8351023,
            longitude: -0.2720476
        }
    ];
    
    $scope.windowOptions = {
        visible: false
    };

    $scope.onClick = function () {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function () {
        $scope.windowOptions.visible = false;
    };

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
