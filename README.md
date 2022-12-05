Dcycle Continuous integration badges
=====

Steward Acquia environments

| id                | name               |
|-------------------|--------------------|
| stewardphysicians | Steward Cohesion   |
| stewardhospitals  | Steward Hospitals  |
| stewardhub        | Steward Hub        |
| stewardd8         | Steward Multisite  |
| stewardcommunity  | stewardcommunity   |

Docker images
| Name       | Github    | Badge               | Rebuild job | Docker hub | Weekly |
|------------|-----------|---------------------|-------------|------------|-|
| drupal | <https://github.com/dcycle/docker-drupal> | [![CircleCI](https://circleci.com/gh/dcycle/docker-drupal.svg?style=svg)](https://circleci.com/gh/dcycle/docker-drupal) | [Jenkins](https://ci.dcycle.com/job/docker-drupal/) | [Docker hub](https://hub.docker.com/r/dcycle/drupal) | [CI triggers](https://app.circleci.com/settings/project/github/dcycle/docker-drupal/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Fdcycle%2Fdocker-drupal&success=true) |
| broken-link-checker | <https://github.com/dcycle/docker-broken-link-checker> | [![CircleCI](https://circleci.com/gh/dcycle/docker-broken-link-checker/tree/master.svg?style=svg)](https://circleci.com/gh/dcycle/docker-broken-link-checker/tree/master) | [Jenkins](https://ci.dcycle.com/job/docker-broken-link-checker/) | [Docker hub](https://hub.docker.com/r/dcycle/broken-link-checker) | (upon rebuild) |
| steward-drupal | <http://github.com/hatch130/steward-docker-drupal> | [![CircleCI](https://circleci.com/gh/hatch130/steward-docker-drupal.svg?style=svg&circle-token=d1a1f153aac0dfcf3fc67c8df8c439450803a11d)](https://circleci.com/gh/hatch130/steward-docker-drupal) | [Jenkins](https://ci.dcycle.com/job/docker-steward-drupal/) | [Docker hub](http://hub.docker.com/r/dcycle/steward-drupal) | (upon rebuild) |

Steward Projects

| Name | Status     | GitHub   | Host          | Cron | Links |
|------|------------|----------|---------------|------|-------|
| Microservices   | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-microservices-base/tree/master.svg?style=svg&circle-token=5526ea5ae425cbc5c93b3f4b423c9abde9606c7f)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-microservices-base/tree/master) | [GitHub](https://github.com/hatch130/steward-microservices-base) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://stewardcommunitystg.prod.acquia-sites.com) [P](http://stewardcommunity.prod.acquia-sites.com) |
| Personalization | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-personalization/tree/master.svg?style=svg&circle-token=e4c160445a7841c411e5a1b67b03661464e4c62f)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-personalization/tree/master) | [GitHub](https://github.com/hatch130/steward-personalization) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://personalization.mystewardhealthcare.org.dcycleproject.org) [P](https://personalization.mystewardhealthcare.org) |
| Events | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-events/tree/master.svg?style=svg&circle-token=fa2ad10dd84c7f0dc5642a7ef98518b77898cec4)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-events/tree/master) | [GitHub](https://github.com/hatch130/steward-events) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/applications/c639f3c4-78b1-473b-8669-8082d3506e52) | [S](http://events.mystewardhealthcare.org.dcycleproject.org) [P](http://events.mystewardhealthcare.org/cron) |
| Feed | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-feed/tree/master.svg?style=svg&circle-token=9dd3dadda5059dae644be76f4e8df157c295aef3)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-feed/tree/master) | [GitHub](https://github.com/hatch130/steward-feed) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://feed.mystewardhealthcare.org.dcycleproject.org) [P](http://feed.mystewardhealthcare.org) |
| ER wait | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-erwait/tree/master.svg?style=svg&circle-token=7f86189e2c0830314672bf1a4bf0b42c6d8952c5)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-erwait/tree/master) | [GitHub](http://github.com/hatch130/steward-erwait) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://erwait.mystewardhealthcare.org.dcycleproject.org) [P](https://prod.erwait.mystewardhealthcare.org.dcycleproject.org) |
| ID | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-id/tree/master.svg?style=svg&circle-token=c138267b1488ae1b76295ecb9010733bee5c9b25)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-id/tree/master) | [GitHub](https://github.com/hatch130/steward-id) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://id.mystewardhealthcare.org.dcycleproject.org) [P](http://id.mystewardhealthcare.org) |
| Hospitals | [![CircleCI](https://circleci.com/gh/hatch130/steward-drupal8.svg?style=svg&circle-token=e63edd5ab2b62b3dedaef98dc145717de6e0adad)](https://circleci.com/gh/hatch130/steward-drupal8) | [GitHub](https://github.com/hatch130/steward-drupal8) | Acquia stewardhub |  |
| Hub | [![CircleCI](https://circleci.com/gh/hatch130/steward-drupal8.svg?style=svg&circle-token=e63edd5ab2b62b3dedaef98dc145717de6e0adad)](https://circleci.com/gh/hatch130/steward-drupal8) | [GitHub](https://github.com/hatch130/steward-drupal8) | Acquia stewardhospitals |  |
| Cohesion | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-cohesion/tree/master.svg?style=svg&circle-token=90f2d82f665bcec33db2e43bc790ba1f8c39bc57)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-cohesion/tree/master) | [GitHub](https://github.com/hatch130/steward-cohesion) | Acquia stewardphysicians | [S](https://cloud.acquia.com/a/environments/23611-ba634f7b-d063-4a51-9e11-33ae6a4ec143/cron) [P](https://cloud.acquia.com/a/environments/23610-ba634f7b-d063-4a51-9e11-33ae6a4ec143/cron) | [S](http://stewardphysiciansstg.prod.acquia-sites.com) [P](https://www.mystewardhealthcare.com) |

Production droplets

| Client | IP | Droplet name | Droplet account |
|-|-|-|-|
| Ahora (Hatch) | 104.236.106.112 | ahoraproduction | Hatch |  

GH pages sites

| Client | URL | GH | Status | Badge |
| Ahora (Hatch) | <https://www.ahoramoney.org> | <http://github.com/hatch130/ahora-frontend> | No maintenance | [![CircleCI](https://circleci.com/gh/hatch130/ahora-frontend/tree/master.svg?style=svg&circle-token=691b3d22542e912af3b09a661b3f002027789d0a)](https://circleci.com/gh/hatch130/ahora-frontend/tree/master) |

Steward sites

| Project    | Usage | Monitor            |
|------------|-------|--------------------|
| Hub        | Stage | [Jenkins](https://ci.dcycle.com/job/steward-hub-and-hospitals-uptime-test/)        |
| Hospitals  | Stage | [Jenkins](https://ci.dcycle.com/job/steward-hub-and-hospitals-uptime-test/)        |

Drupal Modules

| Name             | Status    | GitHub               | Drupal  | Weekly | D version |
|------------------|-----------|----------------------|---------|--------|-----------|
| eventbrite_one_way_sync | [![CircleCI](https://circleci.com/gh/dcycle/eventbrite_one_way_sync/tree/1.x.svg?style=svg)](https://circleci.com/gh/dcycle/eventbrite_one_way_sync/tree/1.x) | [GitHub](https://github.com/dcycle/eventbrite_one_way_sync) | [Drupal](http://drupal.org/project/eventbrite_one_way_sync) | [CI triggers](https://app.circleci.com/settings/project/github/dcycle/eventbrite_one_way_sync/triggers) | 10 |
| entity_inherit | [![CircleCI](https://circleci.com/gh/dcycle/entity_inherit/tree/4.x.svg?style=svg)](https://circleci.com/gh/dcycle/entity_inherit/tree/4.x) | [GitHub](https://github.com/dcycle/entity_inherit) | [Drupal](http://drupal.org/project/entity_inherit) | [CI triggers](https://app.circleci.com/settings/project/github/dcycle/entity_inherit/triggers) | 10 |
| expose_status | [![CircleCI](https://circleci.com/gh/dcycle/expose_status/tree/4.x.svg?style=svg)](https://circleci.com/gh/dcycle/expose_status/tree/4.x) | [GitHub](https://github.com/dcycle/expose_status) | [Drupal](http://drupal.org/project/expose_status) | [CI triggers](https://app.circleci.com/settings/project/github/dcycle/expose_status/triggers) | 10 |


Websites

| Name       | Code                                               | Provider    | prod                         | status | weekly | broken |
|------------|----------------------------------------------------|-------------|------------------------------|--------|--------|--------|
| StaticAuth | <https://github.com/alberto56/staticauth> | D.O. albert | <https://www.staticauth.com> | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/alberto56/staticauth/tree/master.svg?style=svg&circle-token=bb632df7af30e5eaec5ae9c0109c64e833dae6b2)](https://dl.circleci.com/status-badge/redirect/gh/alberto56/staticauth/tree/master) | [CI triggers](https://app.circleci.com/settings/project/github/alberto56/staticauth/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Falberto56%2Fstaticauth&success=true) | n/a |
| Terre des jeunes | <http://github.com/tdjeunes/website> | GH pages | <https://www.terredesjeunes.org> | n/a | n/a | [694](https://docs.google.com/spreadsheets/d/1BkZyx4dyXsLVmCE6gvdc4XxGzIcDJ5GYBxn8DqtKSSQ/edit#gid=326144669) |
| Dcycle Blog | <https://github.com/alberto56/dcycleblog> | GH pages | <https://blog.dcycle.com> | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/alberto56/dcycleblog/tree/gh-pages.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/alberto56/dcycleblog/tree/gh-pages) | [CI triggers](https://app.circleci.com/settings/project/github/alberto56/dcycleblog/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Falberto56%2Fdcycleblog&success=true) | [36](https://docs.google.com/spreadsheets/d/1_sbxl_as4RzAXWjcayQuCbZSrTMWWeI5I6RlVCkWBBI/edit#gid=0) |

Project

| Badge | Github | Weekly |
|-|-|-|
| [![CircleCI](https://circleci.com/gh/dcycle/starterkit-drupalsite/tree/master.svg?style=svg)](https://circleci.com/gh/dcycle/starterkit-drupalsite/tree/master) | <https://github.com/dcycle/starterkit-drupalsite> | [CI triggers](https://app.circleci.com/settings/project/github/dcycle/starterkit-drupalsite/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Fdcycle%2Fstarterkit-drupalsite&success=true) |

Projects (legacy)

| Status       | Project | Stage | Prod | Server |
|------------|---------|--|--|--|
| [![CircleCI](https://circleci.com/gh/dcycle/starterkit-jekyll/tree/master.svg?style=svg)](https://circleci.com/gh/dcycle/starterkit-jekyll/tree/master) | <https://github.com/dcycle/starterkit-jekyll> | | | |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-webgrind.svg?style=svg)](https://circleci.com/gh/dcycle/docker-webgrind) | <https://github.com/dcycle/docker-webgrind> | | | |
| [![CircleCI](https://circleci.com/gh/hatch130/paymo-dashboard/tree/master.svg?style=svg&circle-token=2e1a83c27e35e87eebc461c9bfa34ce909e97880)](https://circleci.com/gh/hatch130/paymo-dashboard/tree/master) | <http://github.com/hatch/paymo-dashboard> | | | |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-html-validate.svg?style=svg)](https://circleci.com/gh/dcycle/docker-html-validate) | <http://github.com/dcycle/docker-html-validate> | | | |
| [![CircleCI](https://circleci.com/gh/dcycle/watchdog_watchdog.svg?style=svg)](https://circleci.com/gh/dcycle/watchdog_watchdog) | <http://github.com/dcycle/watchdog_watchdog> | | | |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-broken-link-checker/tree/master.svg?style=svg)](https://circleci.com/gh/dcycle/docker-broken-link-checker/tree/master) | <https://ci.dcycle.com/job/docker-broken-link-checker/> |
| [![CircleCI](https://circleci.com/gh/dcycle/drupal_yext.svg?style=svg)](https://circleci.com/gh/dcycle/drupal_yext) | <https://github.com/dcycle/drupal_yext> |
| [![CircleCI](https://circleci.com/gh/dcycle/starterkit-php.svg?style=svg)](https://circleci.com/gh/dcycle/starterkit-php) | <https://github.com/dcycle/starterkit-php> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-ledger.svg?style=svg)](https://circleci.com/gh/dcycle/docker-ledger) | <https://github.com/dcycle/docker-ledger> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-phpunit.svg?style=svg)](https://circleci.com/gh/dcycle/docker-phpunit) | <https://github.com/dcycle/docker-phpunit> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-php-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-php-lint) | <https://github.com/dcycle/docker-php-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-phpstan-drupal.svg?style=svg)](https://circleci.com/gh/dcycle/docker-phpstan-drupal) | <https://github.com/dcycle/docker-phpstan-drupal> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-ava.svg?style=svg)](https://circleci.com/gh/dcycle/docker-ava) | <https://github.com/dcycle/docker-ava> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-yaml-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-yaml-lint) | <https://github.com/dcycle/docker-yaml-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/word_monitor.svg?style=svg)](https://circleci.com/gh/dcycle/word_monitor) | <https://github.com/dcycle/word_monitor> |
| [![CircleCI](https://circleci.com/gh/dcycle/starterkit-wordpress.svg?style=svg)](https://circleci.com/gh/dcycle/starterkit-wordpress) | <https://github.com/dcycle/starterkit-wordpress> |
| [![CircleCI](https://circleci.com/gh/dcycle/cert-expiry-monitor.svg?style=svg)](https://circleci.com/gh/dcycle/cert-expiry-monitor) | <https://github.com/dcycle/cert-expiry-monitor> |
| [![CircleCI](https://circleci.com/gh/dcycle/dcbase.svg?style=svg)](https://circleci.com/gh/dcycle/dcbase) | <https://github.com/dcycle/dcbase> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-geoipupdate.svg?style=svg)](https://circleci.com/gh/dcycle/docker-geoipupdate) | <https://github.com/dcycle/docker-geoipupdate> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-compresspdf.svg?style=svg)](https://circleci.com/gh/dcycle/docker-compresspdf) | <https://github.com/dcycle/docker-compresspdf> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-jenkins-helm.svg?style=svg)](https://circleci.com/gh/dcycle/docker-jenkins-helm) | <https://github.com/dcycle/docker-jenkins-helm> |
| [![CircleCI](https://circleci.com/gh/dcycle/convert_media_tags_to_markup.svg?style=svg)](https://circleci.com/gh/dcycle/convert_media_tags_to_markup) | <https://github.com/dcycle/convert_media_tags_to_markup> |
| [![CircleCI](https://circleci.com/gh/dcycle/expose_status.svg?style=svg)](https://circleci.com/gh/dcycle/expose_status) | <https://github.com/dcycle/expose_status> |
| [![CircleCI](https://circleci.com/gh/dcycle/drupal-tester.svg?style=svg)](https://circleci.com/gh/dcycle/drupal-tester) | <https://github.com/dcycle/drupal-tester> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-markdown-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-markdown-lint) | <https://github.com/dcycle/docker-markdown-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-drupal.svg?style=svg)](https://circleci.com/gh/dcycle/docker-drupal) | <https://github.com/dcycle/docker-drupal> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-drupal-check.svg?style=svg)](https://circleci.com/gh/dcycle/docker-drupal-check) | <https://github.com/dcycle/docker-drupal-check> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-md2html.svg?style=svg)](https://circleci.com/gh/dcycle/docker-md2html) | <https://github.com/dcycle/docker-md2html> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-js-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-js-lint) | <https://github.com/dcycle/docker-js-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-pa11y.svg?style=svg)](https://circleci.com/gh/dcycle/docker-pa11y) | <https://github.com/dcycle/docker-pa11y> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-browsertesting/tree/master.svg?style=svg)](https://circleci.com/gh/dcycle/docker-browsertesting/tree/master) | <https://github.com/dcycle/docker-browsertesting> |
| [![CircleCI](https://circleci.com/gh/dcycle/closest_zip_code.svg?style=svg)](https://circleci.com/gh/dcycle/closest_zip_code) | <https://github.com/dcycle/closest_zip_code> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-python-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-python-lint) | <https://github.com/dcycle/docker-python-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-css-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-css-lint) | <https://github.com/dcycle/docker-css-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-sass-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-sass-lint) | <https://github.com/dcycle/docker-sass-lint> |
| n/a | <https://github.com/dcycle/docker-shell-lint> |
| [![CircleCI](https://circleci.com/gh/dcycle/docker-json-lint.svg?style=svg)](https://circleci.com/gh/dcycle/docker-json-lint) | <https://github.com/dcycle/docker-json-lint> |
| [![CircleCI](https://circleci.com/gh/hatch130/steward-drupal8.svg?style=svg&circle-token=e63edd5ab2b62b3dedaef98dc145717de6e0adad)](https://circleci.com/gh/hatch130/steward-drupal8) | [Steward Content and Hospitals](http://github.com/hatch130/steward-drupal8/compare/working?expand=1) | [content](http://stewardhubstg.prod.acquia-sites.com), [hospitals](http://stewardhospitalsstg.prod.acquia-sites.com) | https://content.steward.org, various hospital sites such as https://www.semc.org, [see list here](http://stewardhospitals.prod.acquia-sites.com) | [Steward Hub on Acquia](https://cloud.acquia.com/app/develop/applications/3231742a-b868-46d6-9482-44bd53b6a5d3), [Steward Hospitals on Acquia](https://cloud.acquia.com/app/develop/applications/0365e7f0-4424-457a-9214-9c5812cd0806) |
| [![CircleCI](https://circleci.com/gh/hatch130/steward-physicians-d8.svg?style=svg&circle-token=cb1a99514fd6fe9d816dca8266948b96b1440cf9)](https://circleci.com/gh/hatch130/steward-physicians-d8) | [Physicians](https://github.com/hatch130/steward-physicians-d8) ([see section "multisite"](https://github.com/hatch130/steward-drupal8#multisite)) | [stage](https://www.test.phys.steward.hatch.toptal.dcycle.com) | [prod](https://www.stewardphysicians.org) | [Multisite on Acquia](https://cloud.acquia.com/app/develop/applications/03848274-f445-4327-b058-a189e66cb9a8) |
| [![CircleCI](https://circleci.com/gh/hatch130/steward-medical-group.svg?style=svg&circle-token=fff5da29437fcc9e9989a33745e3d250b364394c)](https://circleci.com/gh/hatch130/steward-medical-group) | [Steward Medical Group](https://github.com/hatch130/steward-medical-group) ([see section "multisite"](https://github.com/hatch130/steward-drupal8#multisite)) | [stage](https://www.test.smg.steward.hatch.toptal.dcycle.com) | [prod](https://www.stewardmedicalgroup.org) | [Multisite on Acquia](https://cloud.acquia.com/app/develop/applications/03848274-f445-4327-b058-a189e66cb9a8) |
| [![CircleCI](https://circleci.com/gh/hatch130/stewardhealthchoice.svg?style=svg&circle-token=d93fb95779f7b2b03df0affc6bb37414a4c16b49)](https://circleci.com/gh/hatch130/stewardhealthchoice) | [Health Choice](https://github.com/hatch130/stewardhealthchoice) ([see section "multisite"](https://github.com/hatch130/steward-drupal8#multisite)) | [stage](https://www.test.shc.steward.hatch.toptal.dcycle.com) | [prod](https://www.stewardhealthchoice.org) | [Multisite on Acquia](https://cloud.acquia.com/app/develop/applications/03848274-f445-4327-b058-a189e66cb9a8) |
| [![CircleCI](https://circleci.com/gh/hatch130/steward-docker-drupal.svg?style=svg&circle-token=d1a1f153aac0dfcf3fc67c8df8c439450803a11d)](https://circleci.com/gh/hatch130/steward-docker-drupal) [Dcycle Jenkins CI](https://ci.dcycle.com/job/docker-steward-drupal/) | [Steward base Docker image](https://github.com/hatch130/steward-docker-drupal) | ([see section "base images"](https://github.com/hatch130/steward-drupal8#base-images)) | ([see section "base images"](https://github.com/hatch130/steward-drupal8#base-images)) | [Docker Hub](https://hub.docker.com/r/dcycle/steward-drupal) ([see section "base images"](https://github.com/hatch130/steward-drupal8#base-images)) |
| [![CircleCI](https://circleci.com/gh/hatch130/steward-cohesion.svg?style=svg&circle-token=0a1a962bd91b85289b772869300433b69dd178f3)](https://circleci.com/gh/hatch130/steward-cohesion) | [Steward Cohesion](https://github.com/hatch130/steward-cohesion) | [stage](http://stewardphysiciansstg.prod.acquia-sites.com) | [prod](http://stewardphysicians.prod.acquia-sites.com) | [Steward Cohesion on Acquia](https://cloud.acquia.com/app/develop/applications/ba634f7b-d063-4a51-9e11-33ae6a4ec143) |

The indicator lights
-----

https://commons.wikimedia.org/wiki/File:SIMPLE_CONTROL_WITH_INDICATOR_LIGHTS.jpg

The favicon
-----

Generated using [Favicon Generator](https://favicon.io/favicon-generator/) with "D", font "Allerta", color "#00F"
