# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 1.0.0 (2025-09-11)


### ⚠ BREAKING CHANGES

* The version endpoint will now return a JSON object instead of a simple version string. This will allow the addition of other properties about the current build. Yes, this runs afoul of YAGNI. Sue me.

### Features

* add initial version controller ([1c8c478](https://github.com/rbseaver/cajunlyrics-web/commit/1c8c478a6ad2683b3decb53c109ec43e8ab6f158))
* add Swagger to document endpoints ([17d2c88](https://github.com/rbseaver/cajunlyrics-web/commit/17d2c88738ab399436026a31d0627e7e35b1c341))
* change return type for version endpoint ([3c950c5](https://github.com/rbseaver/cajunlyrics-web/commit/3c950c5b6d4068fd3226b61e9adc79954dade048))
* **ci:** establish a ci/cd workflow ([9c4edb5](https://github.com/rbseaver/cajunlyrics-web/commit/9c4edb54229c35c8bd72d3e3b2bcadd981a42159))
* **ci:** introduce Github Actions ([4beb30b](https://github.com/rbseaver/cajunlyrics-web/commit/4beb30b20f1a34941d47a102d76a46f38760e137))
* introduce first iteration of version service ([275704f](https://github.com/rbseaver/cajunlyrics-web/commit/275704f8f69312272b352b8ba4515f90eaa27791))
* introduce simple http client with GET function ([a717425](https://github.com/rbseaver/cajunlyrics-web/commit/a7174255cf277bd85f8f5d0794ce33efd4a4b634))
* set global prefix of /api, per the rest of the world ([f608d18](https://github.com/rbseaver/cajunlyrics-web/commit/f608d18e2d6c218793b1bcd9190ad4d6f184e312))


### Bug Fixes

* add route handler decorator to version controller ([0f07a10](https://github.com/rbseaver/cajunlyrics-web/commit/0f07a102894d48a20a9df934ffb7c784eb530883))
* correct fs and path imports ([a5dea4d](https://github.com/rbseaver/cajunlyrics-web/commit/a5dea4dbdb43878b03a1d2b5d7694a123320e11f))
