function addProject(info) {
  $('.projects .template').clone().removeClass('template').addClass(info.id).appendTo('.projects');
  $('.projects .' + info.id + ' .project-cell').html('<a href="' + info.url + '">' + info.name + '</a>');

  if (info.projectinfo == undefined) {
    $('.projects .' + info.id + ' .load-from-projectinfo-yaml').html('Unknown .project-info/info.yml path');
  }
  else {
    $.getJSON(info.projectinfo, [], function(data) {
      ci(info, data).add();
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      $('.projects .' + info.id + ' .load-from-projectinfo-yaml').html('<a href="' + info.projectinfo + '">.project-info/info.yml</a> failed: ' + err );
    });
  }
}
