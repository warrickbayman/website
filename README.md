# warrickbayman.com

[![Tests](https://github.com/warrickbayman/website/actions/workflows/node.js.yml/badge.svg)](https://github.com/warrickbayman/website/actions/workflows/node.js.yml)

The `warrickbayman.com` site is built on Vue with Vue Router and Pinia for state management. The site is open source,
but since it's my personal website, I probably won't take any contributions unless they're to fix bugs.

The site is inspired by my personal terminal layout. I use Warp on MacOS with Eza as a replacement for `ls`. I've taken
some liberties, because it's mine, and I can if I want to.

## Installation

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Usage
The site is optimized for keyboard navigation. You should be able to navigate the entire site without touching a mouse.
However, since this may be a little foreign for some visitors, and the fact that the site needs to be mobile friendly,
you can still click on stuff.

To navigate the menus, use the up and down arrow keys. You can also type out what you want to "execute" and hit ENTER.
This is the same as simply clicking on the item you want.

In most cases, `ESC` will get you back to the previous page. In some cases (especially in the reader layout), `Ctrl-C`
"close" the current view and return you to the previous page.

You can use `Ctrl-A` to navigate to the top of a page, and `Ctrl-E` to navigate to the bottom of a page.

## Running Tests
The test suite uses Nightwatch.js for end-to-end testing. To run tests, ensure the dev server is running first
and execute:

```shell
npx nightwatch

# ...or in headless mode:

npx nightwatch --headless
```
