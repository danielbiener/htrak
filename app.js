var app = angular.module('HTrack', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  
  var metrics = [
    {metric: 'weight', label: 'Weight', goal: 150, unit: 'lbs', position: 0},
    {metric: 'bp', label: 'BP', goal: '120/80', unit: 'mmHg', position: 1},
    {metric: 'hr', label: 'HR', goal: 60, unit: 'bpm', position: 2},
    {metric: 'bs', label: 'BS', goal: 100, unit: 'mmol/L',position: 3}
  ];
  var profile = {email: 'daniel@biener.org', metrics};

  $scope.profile = profile;

  $scope.posts = [
      {title: 'post 1', upvotes: 5, date: '1/1/2017', weight: 200, bp: '120/80', hr: 50, bs: 120 },
      {title: 'post 2', upvotes: 2, date: '1/2/2017', weight: 201, bp: '120/80', hr: 50, bs: 121 },
      {title: 'post 3', upvotes: 15, date: '1/3/2017', weight: 202, bp: '120/80', hr: 50, bs: 122 },
      {title: 'post 4', upvotes: 9, date: '1/4/2017', weight: 203, bp: '120/80', hr: 50, bs: 123 },
      {title: 'post 5', upvotes: 4, date: '1/5/2017', weight: 204, bp: '120/80', hr: 50, bs: 124 }
      ];

  $scope.currDate = $scope.posts[0];
  $scope.selectedMetric = "weight";

  $scope.buildDisplayValue = function(metricName){

         currDate.weight.value + ' ' + $scope.getSingleItem($scope.profile.metrics, 'label', metricName);
    }


  $scope.changeSelectedDate = function(newDate){
      currDate = $scope.getSingleItem($scope.posts, 'date', newDate);
  }

  $scope.showTab = function(tabName){
    
    var details = document.getElementById('details');
    var profile = document.getElementById('profile');
    var day = document.getElementById('day');
    
    switch(expression) {
    case 'day':
        details.style.display = 'none';
        profile.style.display = 'none';
        day.style.display = 'block';
        break;
    case 'detail':
        details.style.display = 'block';
        profile.style.display = 'none';
        day.style.display = 'none';
        break;
    case 'profile':
        details.style.display = 'none';
        profile.style.display = 'block';
        day.style.display = 'none';
        break;
    default:
        break;
    };
  }


  $scope.inputShowUnit = function(inputElement){
      /* get correct unit
var x = 1;

        check if unit already there
        append unit
      */
    var x = 1;
  }

  $scope.inputHideUnit = function(inputElement){
      /* get correct unit
        check if unit already there
        append unit
      */

  }



  $scope.addPost = function(){
        //if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push(
          {title: $scope.title, 
            link: $scope.link, 
            upvotes: 0,
            date: $scope.date,
            weight: $scope.weight,
            bs: $scope.bs
          }
        )};


    $scope.getSingleItem = function getByValue(arr, prop, value) {
      for (var i=0, iLen=arr.length; i<iLen; i++) 
      {
        if (arr[i][prop] == value) return arr[i];
      }
    };

    $scope.incrementUpvotes = function(post) {
          post.upvotes += 1;
      };

}

]);
