# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.2.0](https://github.com/rbseaver/cajunlyrics-web/compare/v2.1.0...v2.2.0) (2025-05-04)


### Features

* **ci:** establish a ci/cd workflow ([9a30d6e](https://github.com/rbseaver/cajunlyrics-web/commit/9a30d6ecb1cb4c9df30fc455d20a242e2f956715))

## [2.1.0](https://github.com/rbseaver/cajunlyrics-web/compare/v2.0.0...v2.1.0) (2025-04-30)


### Features

* **ci:** introduce Github Actions ([86f5831](https://github.com/rbseaver/cajunlyrics-web/commit/86f583188a48d77e21007db3dba8ebb3f47aeb7c))
* set global prefix of /api, per the rest of the world ([e26c757](https://github.com/rbseaver/cajunlyrics-web/commit/e26c7573519bd5ffc21b653108df183753b7921f))

## [2.0.0](https://github.com/rbseaver/cajunlyrics-web/compare/v1.0.0...v2.0.0) (2025-04-29)


### ⚠ BREAKING CHANGES

* The version endpoint will now return a JSON object instead of a simple version string. This will allow the addition of other properties about the current build. Yes, this runs afoul of YAGNI. Sue me.

### Features

* change return type for version endpoint ([269bd76](https://github.com/rbseaver/cajunlyrics-web/commit/269bd76a37fffb2d23a4b346e7be000527e73022))

## 1.0.0 (2025-04-29)


### Features

* add initial version controller ([1c8c478](https://github.com/rbseaver/cajunlyrics-web/commit/1c8c478a6ad2683b3decb53c109ec43e8ab6f158))
* introduce first iteration of version service ([275704f](https://github.com/rbseaver/cajunlyrics-web/commit/275704f8f69312272b352b8ba4515f90eaa27791))


### Bug Fixes

* add route handler decorator to version controller ([0f07a10](https://github.com/rbseaver/cajunlyrics-web/commit/0f07a102894d48a20a9df934ffb7c784eb530883))
* correct fs and path imports ([a5dea4d](https://github.com/rbseaver/cajunlyrics-web/commit/a5dea4dbdb43878b03a1d2b5d7694a123320e11f))
