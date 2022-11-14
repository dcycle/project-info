---
---
$(function() {
  $.getJSON('/projects.json', [], function(data) {
    data.forEach(function (project) {
      addProject(project);
    });
  });
});
