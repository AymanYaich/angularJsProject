app.component("about", {
  templateUrl: "/templates/about.html",
  controller: "aboutController",
  controllerAs: "vm",
  bindings: {
    name: "=",
    hello: "&",
  },
});
