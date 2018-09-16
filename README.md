# ngx-dom-wrappers

[![npm](https://img.shields.io/npm/v/ngx-dom-wrappers.svg)](https://www.npmjs.com/package/ngx-dom-wrappers)
[![npm](https://img.shields.io/npm/l/ngx-dom-wrappers.svg)](https://www.npmjs.com/package/ngx-dom-wrappers)
[![Build Status](https://travis-ci.com/Spaier/ngx-dom-wrappers.svg?branch=master)](https://travis-ci.com/Spaier/ngx-dom-wrappers)
[![devDependencies](https://david-dm.org/spaier/ngx-dom-wrappers/dev-status.svg)](https://david-dm.org/spaier/ngx-dom-wrappers?type=dev)

## Prerequisites

- Node
- npm or yarn.

## About

Angular library providing wrappers for dom types.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Resources](#resources)
* [License](#license)

## Installation

```bash
npm install ngx-dom-wrappers
```

or

```bash
yarn add ngx-dom-wrappers
```

## Usage

1. Import `DomWrappersModule` in `AppModule` or `CoreModule` of your application.

AppModule

```ts

@NgModule({
  imports: [
    // Other imports
    DomWrappersModule
    // Other imports
  ],
})
export class AppModule { }

```

CoreModule

```ts

@NgModule({
  imports: [
    // Other imports
    DomWrappersModule
    // Other imports
  ],
  exports: [
    // Other exports
    DomWrappersModule
    // Other exports
  ],
})
export class CoreModule { }

```

2. Use wrappers in your code 

```ts

import { WINDOW, LOCAL_STORAGE, SESSION_STORAGE } from 'ngx-dom-wrappers'

constructor(
    @Inject(WINDOW) windowWrapper,
    @Inject(LOCAL_STORAGE) localStorageWrapper,
    @Inject(SESSION_STORAGE) sessionStorageWrapper,
  ) {
	const windowObject = windowWrapper as Window
	if (windowObject) {
    // Your code
  }
}

```

## Resources

* Docs: <https://spaier.github.io/ngx-dom-wrappers>
* CoreModule: <https://angular.io/guide/styleguide#core-feature-module>

## License

MIT
