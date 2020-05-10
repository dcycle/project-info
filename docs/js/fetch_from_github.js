---
---
$(function() {
  var accounts = [];
  {% for account in site.data.github_accounts.items %}
  accounts.push({
    nickname: "{{ account.nickname }}"
  });
  {% endfor %}

  function getData(nickname, page = 1) {
    $.getJSON('https://api.github.com/users/' + nickname + '/repos?page=' + page, [], function(data) {
      if (data.length == 0) {
        return;
      }

      data.forEach(function (repo) {
        var branch = repo.default_branch;
        addProject({
          id: 'github-' + nickname + '-' + repo.name,
          provider: 'github',
          provider_short: 'gh',
          name: repo.full_name,
          default_branch: branch,
          url: repo.html_url,
          projectinfo: 'https://raw.githubusercontent.com/' + repo.full_name + '/' + branch + '/.project-info/info.json',
        });
      });
      getData(nickname, ++page);
    });
  }

  accounts.forEach(function (account) {
    var nickname = account.nickname;

    console.log('Fetching all projects for ' + nickname);
    getData(nickname);
  });
});
