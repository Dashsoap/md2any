# md2ant

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> Awesome node module

## Installation

```shell
$ npm install md2ant

# or yarn
$ yarn add md2ant
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const md2Ant = require('md2ant')
const result = md2Ant('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### md2Ant(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

```shell
$ yarn global add md2ant

# or npm
$ npm install md2ant -g
```

```shell
$ md2ant --help

  Usage: md2ant <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; dashsoap <360062589@qq.com>



[travis-image]: https://img.shields.io/travis/dashsoap/md2ant/master.svg
[travis-url]: https://travis-ci.org/dashsoap/md2ant
[codecov-image]: https://img.shields.io/codecov/c/github/dashsoap/md2ant/master.svg
[codecov-url]: https://codecov.io/gh/dashsoap/md2ant
[downloads-image]: https://img.shields.io/npm/dm/md2ant.svg
[downloads-url]: https://npmjs.org/package/md2ant
[version-image]: https://img.shields.io/npm/v/md2ant.svg
[version-url]: https://npmjs.org/package/md2ant
[license-image]: https://img.shields.io/github/license/dashsoap/md2ant.svg
[license-url]: https://github.com/dashsoap/md2ant/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/dashsoap/md2ant.svg
[dependency-url]: https://david-dm.org/dashsoap/md2ant
[devdependency-image]: https://img.shields.io/david/dev/dashsoap/md2ant.svg
[devdependency-url]: https://david-dm.org/dashsoap/md2ant?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
