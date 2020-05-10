function ci(info, data) {
  var object = Object.create(projectInfo(info, data, '.ci-cell', 'ci'));

  object.parse = function(data) {
    var result = ""

    data.forEach(function(e) {
      if (e.badge.markup != undefined) {
        result += "<img src=" + e.badge.markup + "/>";
      }
      else {
        var fullpath = info.provider_short + '/' + info.name + '/tree/' + info.default_branch;
        result += '<p><a href="https://circleci.com/' + fullpath + '"><img src="https://circleci.com/' + fullpath + '.svg?style=svg" alt="CircleCI"></a></p>';
      }
    });

    return result;
  }

  object.validate = function(data) {
    var type = typeof data;
    if (!Array.isArray(data)) {
      throw 'the data must be an array, not a ' + type;
    }
    data.forEach(function(e) {
      if (e.badge.markup == undefined && e.badge.template != 'circleci') {
        console.log('cannot parse');
        console.log(e)
        throw 'We do not know how to parse the data, see console'
      }
    });
  }

  return object;
}
