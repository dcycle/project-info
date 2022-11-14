function addProject(info) {
  $('.projects .template').clone().removeClass('template').addClass(info.id).appendTo('.projects');
  $('.projects .' + info.id + ' .project-cell').html('<a href="' + info.url + '">' + info.name + '</a>');
  ci(info, data).add();
}
