app.controller('TodoListCtrl', function($scope, todos){
	$scope.todos =  todos;
	$scope.filterByCompleted = '';
	
	$scope.setCategory = function(str){
		var map = {
			all: '',
			completed: true,
			active: false
		}
		$scope.filterByCompleted = map[str];
		
	}
})
