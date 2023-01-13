Dcycle Continuous integration badges
=====

Monitoring

| Status | Description | Period | Periodically |
|--------|-------------|--------|--------------|
| [![CircleCI](https://dl.circleci.com/status-badge/img/gh/alberto56/my-cert-expiry-monitor/tree/master.svg?style=svg&circle-token=5e476a011627f795a9950357d800bf950185211d)](https://dl.circleci.com/status-badge/redirect/gh/alberto56/my-cert-expiry-monitor/tree/master) | Certs I manage | Daily | [C.I triggers](https://app.circleci.com/settings/project/github/alberto56/my-cert-expiry-monitor/triggers) |

Steward Acquia environments

| id                | name                  |
|-------------------|-----------------------|
| stewardphysicians | Steward Cohesion      |
| stewardhospitals  | Steward Hospitals     |
| stewardhub        | Steward Hub           |
| stewardd8         | Steward Multisite     |
| stewardcommunity  | Steward Microservices |

Docker images
| Name       | Github    | Badge               | Rebuild job | Docker hub | Weekly |
|------------|-----------|---------------------|-------------|------------|-|
| steward-drupal | <http://github.com/hatch130/steward-docker-drupal> | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-docker-drupal/tree/master.svg?style=svg&circle-token=80cfc429eddb058f4ce9168222eff05ed46e6001)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-docker-drupal/tree/master) | [Jenkins](https://ci.dcycle.com/job/docker-steward-drupal/) | [Docker hub](http://hub.docker.com/r/dcycle/steward-drupal) | (upon rebuild) |

Steward Projects

| Name | Status     | GitHub   | Host          | Cron | Links | Uptime |
|------|------------|----------|---------------|------|-------|--------|
| Microservices   | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-microservices-base/tree/master.svg?style=svg&circle-token=1ce2129187b6f160baba13ef06d2fc10a208c793)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-microservices-base/tree/master) | [GitHub](https://github.com/hatch130/steward-microservices-base) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://stewardcommunitystg.prod.acquia-sites.com) [P](http://stewardcommunity.prod.acquia-sites.com) | |
| Personalization | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-personalization/tree/master.svg?style=svg&circle-token=a8d4d077df50e886ca46b3db7a51fc1bf139ae53)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-personalization/tree/master) | [GitHub](https://github.com/hatch130/steward-personalization) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://personalization.mystewardhealthcare.org.dcycleproject.org) [P](https://personalization.mystewardhealthcare.org) | |
| Events | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-events/tree/master.svg?style=svg&circle-token=7bb391e4c6707bd93fdf768fe937f7cc610a31cf)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-events/tree/master) | [GitHub](https://github.com/hatch130/steward-events) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/applications/c639f3c4-78b1-473b-8669-8082d3506e52) | [S](http://events.mystewardhealthcare.org.dcycleproject.org) [P](http://events.mystewardhealthcare.org) | |
| Feed | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-feed/tree/master.svg?style=svg&circle-token=9dd3dadda5059dae644be76f4e8df157c295aef3)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-feed/tree/master) | [GitHub](https://github.com/hatch130/steward-feed) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://feed.mystewardhealthcare.org.dcycleproject.org) [P](http://feed.mystewardhealthcare.org) | |
| ER wait | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-erwait/tree/master.svg?style=svg&circle-token=7f86189e2c0830314672bf1a4bf0b42c6d8952c5)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-erwait/tree/master) | [GitHub](http://github.com/hatch130/steward-erwait) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://erwait.mystewardhealthcare.org.dcycleproject.org) [P](https://erwait.mystewardhealthcare.org) | |
| Doctors | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-doctors/tree/master.svg?style=svg&circle-token=7b6c1b610725b0a84314ec07287c5de591fdd28b)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-doctors/tree/master) | [GitHub](https://github.com/hatch130/steward-doctors) | Acquia stewardcommunity | [S](https://cloud.acquia.com/a/environments/52144-c639f3c4-78b1-473b-8669-8082d3506e52/cron) [P](https://cloud.acquia.com/a/environments/52143-c639f3c4-78b1-473b-8669-8082d3506e52/cron) | [S](http://doctors.mystewardhealthcare.org.dcycleproject.org) [P](http://doctors.mystewardhealthcare.org) | |
| Hospitals | [![CircleCI](https://circleci.com/gh/hatch130/steward-drupal8.svg?style=svg&circle-token=e63edd5ab2b62b3dedaef98dc145717de6e0adad)](https://circleci.com/gh/hatch130/steward-drupal8) | [GitHub](https://github.com/hatch130/steward-drupal8) | Acquia stewardhub |  | | [S](https://ci.dcycle.com/job/steward-hub-and-hospitals-uptime-test/) [P](https://ci.dcycle.com/view/steward/job/steward-hub-and-hospitals-uptime-prod/) |
| Hub | [![CircleCI](https://circleci.com/gh/hatch130/steward-drupal8.svg?style=svg&circle-token=e63edd5ab2b62b3dedaef98dc145717de6e0adad)](https://circleci.com/gh/hatch130/steward-drupal8) | [GitHub](https://github.com/hatch130/steward-drupal8) | Acquia stewardhospitals |  | | [S](https://ci.dcycle.com/job/steward-hub-and-hospitals-uptime-test/) [P](https://ci.dcycle.com/view/steward/job/steward-hub-and-hospitals-uptime-prod/) |
| Cohesion | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-cohesion/tree/master.svg?style=svg&circle-token=90f2d82f665bcec33db2e43bc790ba1f8c39bc57)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-cohesion/tree/master) | [GitHub](https://github.com/hatch130/steward-cohesion) | Acquia stewardphysicians | [S](https://cloud.acquia.com/a/environments/23611-ba634f7b-d063-4a51-9e11-33ae6a4ec143/cron) [P](https://cloud.acquia.com/a/environments/23610-ba634f7b-d063-4a51-9e11-33ae6a4ec143/cron) | [S](http://stewardphysiciansstg.prod.acquia-sites.com) [P](https://www.mystewardhealthcare.com) | |
| SHC | [![CircleCI](https://circleci.com/gh/hatch130/stewardhealthchoice.svg?style=svg&circle-token=d93fb95779f7b2b03df0affc6bb37414a4c16b49)](https://circleci.com/gh/hatch130/stewardhealthchoice) | [GitHub](https://github.com/hatch130/stewardhealthchoice) | Acquia stewardd8 | [S](https://cloud.acquia.com/a/environments/33309-03848274-f445-4327-b058-a189e66cb9a8/cron) [P](https://cloud.acquia.com/a/environments/33308-03848274-f445-4327-b058-a189e66cb9a8/cron) | [S](http://www.test.shc.steward.hatch.toptal.dcycle.com) [P](https://www.stewardhealthchoice.org) | |
| Physicians | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/hatch130/steward-cohesion/tree/master.svg?style=svg&circle-token=90f2d82f665bcec33db2e43bc790ba1f8c39bc57)](https://dl.circleci.com/status-badge/redirect/gh/hatch130/steward-cohesion/tree/master) | [GitHub](https://github.com/hatch130/steward-cohesion) | Acquia stewardd8 | [S](https://cloud.acquia.com/a/environments/33309-03848274-f445-4327-b058-a189e66cb9a8/cron) [P](https://cloud.acquia.com/a/environments/33308-03848274-f445-4327-b058-a189e66cb9a8/cron) | [S](http://www.test.phys.steward.hatch.toptal.dcycle.com) [P](https://www.stewardphysicians.org) | |

Production droplets

| Client | IP | Droplet name | Droplet account |
|--------|----|--------------|-----------------|
| Ahora (Hatch) | 104.236.106.112 | ahoraproduction | Hatch |
| Le Hub Wiki |  | docker-ubuntu-s-1vcpu-2gb-nyc1-01 | LeHub |

GH pages sites

| Client | URL | GH | Status | Badge | Weekly |
|--------|-----|----|--------|-------|--------|
| Ahora (Hatch) | <https://www.ahoramoney.org> | <http://github.com/hatch130/ahora-frontend> | No maintenance | [![CircleCI](https://circleci.com/gh/hatch130/ahora-frontend/tree/master.svg?style=svg&circle-token=691b3d22542e912af3b09a661b3f002027789d0a)](https://circleci.com/gh/hatch130/ahora-frontend/tree/master) |

Websites

| Name       | Code                                               | Provider    | prod                         | status | weekly | broken |
|------------|----------------------------------------------------|-------------|------------------------------|--------|--------|--------|
| StaticAuth | <https://github.com/alberto56/staticauth> | D.O. albert | <https://www.staticauth.com> | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/alberto56/staticauth/tree/master.svg?style=svg&circle-token=bb632df7af30e5eaec5ae9c0109c64e833dae6b2)](https://dl.circleci.com/status-badge/redirect/gh/alberto56/staticauth/tree/master) | [CI triggers](https://app.circleci.com/settings/project/github/alberto56/staticauth/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Falberto56%2Fstaticauth&success=true) | n/a |
| Bioénergie Haïti | <https://github.com/alberto56/beh-site> | GH pages alberto56 | <https://www.bioenergiehaiti.org> | [![CircleCI](https://circleci.com/gh/alberto56/beh-site/tree/master.svg?style=svg&circle-token=4b52c6e32eab20a95d6d6e5cb39d099761abd3fd)](https://circleci.com/gh/alberto56/beh-site/tree/master) | [CI trigger](https://app.circleci.com/settings/project/github/alberto56/beh-site/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Falberto56%2Fbeh-site&success=true) | 0 |
| Bioénergie Togo | <https://github.com/alberto56/bioenergie-togo> | GH pages alberto56 | <https://www.bioenergietogo.org> | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/alberto56/bioenergie-togo/tree/master.svg?style=svg&circle-token=f3ff2227dacb67ba038d18a16f62d829fb2c4488)](https://dl.circleci.com/status-badge/redirect/gh/alberto56/bioenergie-togo/tree/master) | [CI Trigger](https://app.circleci.com/settings/project/github/alberto56/bioenergie-togo/triggers?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2Falberto56%2Fbioenergie-togo&success=true) | 0 |

Projects

| Status       | Project | Stage | Prod | Server |
|------------|---------|--|--|--|
| [![CircleCI](https://circleci.com/gh/hatch130/paymo-dashboard/tree/master.svg?style=svg&circle-token=2e1a83c27e35e87eebc461c9bfa34ce909e97880)](https://circleci.com/gh/hatch130/paymo-dashboard/tree/master) | <http://github.com/hatch/paymo-dashboard> | | | |
| [![CircleCI](https://circleci.com/gh/hatch130/steward-docker-drupal.svg?style=svg&circle-token=d1a1f153aac0dfcf3fc67c8df8c439450803a11d)](https://circleci.com/gh/hatch130/steward-docker-drupal) [Dcycle Jenkins CI](https://ci.dcycle.com/job/docker-steward-drupal/) | [Steward base Docker image](https://github.com/hatch130/steward-docker-drupal) | ([see section "base images"](https://github.com/hatch130/steward-drupal8#base-images)) | ([see section "base images"](https://github.com/hatch130/steward-drupal8#base-images)) | [Docker Hub](https://hub.docker.com/r/dcycle/steward-drupal) ([see section "base images"](https://github.com/hatch130/steward-drupal8#base-images)) |
