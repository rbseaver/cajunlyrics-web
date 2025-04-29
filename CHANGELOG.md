# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

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
