# ngx-dom-wrappers

[![npm](https://img.shields.io/npm/v/ngx-dom-wrappers.svg)](https://www.npmjs.com/package/ngx-dom-wrappers)
[![npm](https://img.shields.io/npm/l/ngx-dom-wrappers.svg)](https://www.npmjs.com/package/ngx-dom-wrappers)

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
    @Inject(WINDOW) windowWrapper: Window,
    @Inject(LOCAL_STORAGE) localStorageWrapper: Storage,
    @Inject(SESSION_STORAGE) sessionStorageWrapper: Storage,
  ) {
	const windowObject = windowWrapper as Window
	if (windowWrapper) {
    // Your code
  }
}

```

## Resources

* CoreModule: <https://angular.io/guide/styleguide#core-feature-module>

## License

MIT
