app.controller("homeController", function ($scope) {
  this.name = "ahmed";
  $scope.name = "walid";

  this.hello = () => {
    console.log("hello home component");
  };

  setTimeout(() => {
    this.name = "jjjhjhjhj";
  }, 3000);
});
