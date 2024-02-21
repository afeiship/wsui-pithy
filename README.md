# wsui-shorty
> Short and pithy style toolkits.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/wsui-shorty
```

## usage
```scss
// default to `scss`
@import '~@jswork/wsui-shorty/dist/index.scss';
// or use `css`
@import '~@jswork/wsui-shorty/dist/style.css";

// when tailwind
@import '~@jswork/wsui-shorty/dist/tailwind.css";
// OR use scss
@import '~@jswork/wsui-shorty/dist/tailwind.scss";
```

## with tailwind
> You can use `@jswork/wsui-shorty` with tailwind. At first, you need install `sass`.

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@jswork/wsui-shorty/dist/tailwind.css';

body {
    background: #eee;
}
```

## documentation
- [align.scss](./documentation/align.scss.md)
- [background.scss](./documentation/background.scss.md)
- [border.scss](./documentation/border.scss.md)
- [box-sizing.scss](./documentation/box-sizing.scss.md)
- [box.scss](./documentation/box.scss.md)
- [clearfix.scss](./documentation/clearfix.scss.md)
- [cursor.scss](./documentation/cursor.scss.md)
- [debug.scss](./documentation/debug.scss.md)
- [flip.scss](./documentation/flip.scss.md)
- [display.scss](./documentation/display.scss.md)
- [float.scss](./documentation/float.scss.md)
- [font-size.scss](./documentation/font-size.scss.md)
- [height.scss](./documentation/height.scss.md)
- [line-clamp.scss](./documentation/line-clamp.scss.md)
- [margin.scss](./documentation/margin.scss.md)
- [overflow.scss](./documentation/overflow.scss.md)
- [padding.scss](./documentation/padding.scss.md)
- [position.scss](./documentation/position.scss.md)
- [shadow.scss](./documentation/shadow.scss.md)
- [shape.scss](./documentation/shape.scss.md)
- [status.scss](./documentation/status.scss.md)
- [text.scss](./documentation/text.scss.md)
- [transform.scss](./documentation/transform.scss.md)
- [transparent.scss](./documentation/transparent.scss.md)
- [width.scss](./documentation/width.scss.md)
- [z-index.scss](./documentation/z-index.scss.md)

## license
Code released under [the MIT license](https://github.com/afeiship/wsui-shorty/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui-shorty
[version-url]: https://npmjs.org/package/@jswork/wsui-shorty

[license-image]: https://img.shields.io/npm/l/@jswork/wsui-shorty
[license-url]: https://github.com/afeiship/wsui-shorty/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui-shorty
[size-url]: https://github.com/afeiship/wsui-shorty/blob/master/dist/wsui-shorty.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui-shorty
[download-url]: https://www.npmjs.com/package/@jswork/wsui-shorty
