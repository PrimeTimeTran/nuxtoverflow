---
createdAt: 2023-10-29
title: Nuxt
description: Nuxt
tags: Nuxt, Vue, Full Stack
# https://mokkapps.de/blog/focus-and-code-diff-in-nuxt-content-code-blocks
# https://mokkapps.de/blog/how-to-create-a-custom-code-block-with-nuxt-content-v2
---

# Nuxt Overview

Nuxt is an incredible framework brought to us by a team of incredibly talented people. With it we can build front end apps, backend apis, and so much more.

## Code

It's written as a templating engine

```vue [./pages/index.vue] {1-6}
<template>
  <div class="pt-24">
    <h1>Hello World</h1>
    <p>I'm a Nuxt blog</p>
  </div>
</template>
```

The templating engine contains HTML

```vue [./pages/index.vue] {3-4}
<template>
  <div class="pt-24">
    <h1>Hello World</h1>
    <p>I'm a Nuxt blog</p>
  </div>
</template>
```


Vue files also include script tags which contain js

```vue [./pages/index.vue] {8-12}
<template>
  <div class="pt-24">
    <h1>Hello World</h1>
    <p>I'm a Nuxt blog</p>
  </div>
</template>

<script>
function helloWorld() {
  console.log('Hello World')
}
</script>
```


Vue files also include script tags which contain js

```vue [./pages/index.vue]
<template>
  <div class="pt-24">
    <h1>Hello World</h1>
    <p>I'm a Nuxt blog</p>
  </div>
</template>

<script>
function helloWorld() {
  console.log('Hello World')
}
</script>
```