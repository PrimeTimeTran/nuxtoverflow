---
createdAt: 2023-10-30
title: Markdown Syntax
shortName: Markdown Syntax
---
# Markdown

## Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Formatting

The *quick* brown fox **jumps** over the \~lazy\~ dog.

## Ordered List

1. Alpha
2. Bravo
3. Charlie

## Unordered List

* JS
* TS
* Python

## Code Blocks

```dart
void helloWorld() {
  print('Hello World')
}
```

```dart
void helloWorld() {
  print('Hello World')
  print('Hello World')
  print('Hello World')
  print('Hello World')
  print('Hello World')
}
```

```javascript
<template>
  <div class="pt-24">
    <ContentDoc class="prose dark:prose-invert" />
    <h2>Contact Form</h2>
  </div>
</template>
```

> If you don't stand for something you'll fall for anything.

## Images

![](https://imgs.xkcd.com/comics/ten_thousand_2x.png)

## Gifs

![](https://i.giphy.com/media/4pMX5rJ4PYAEM/giphy.webp)

## Tables

| Tables        | Are           | Cool  |
| ------------- | ------------- | ----- |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| zebra stripes | are neat      | $1    |

Colons can be used to align columns.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| *Still*  | `renders` | **nicely** |
| 1        | 2         | 3          |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

## Dropdowns

<details>
  <summary>Click me</summary>
  
  ### Heading
  1. Foo
  2. Bar
     * Baz
     * Qux

  ### Some Javascript
  ```js
  function logSomething(something) {
    console.log('Something', something);
  }
  ```
</details>