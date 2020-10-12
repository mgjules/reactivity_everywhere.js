# Lightning talk - Reactivity_everywhere.js

### /user/me
- Jules (aka mike)
- Senior Web Developer @ BOCASAY

---

### /disclaimer

- Inspired from Oscar Spencer's talk @ VueConf US 2020
  - He also wrote a blog post. Noice!

---

### /reactivity 🔁

> In short, reactivity means, the result of a computation, which has dependencies, will be **automatically updated** when the **dependencies change**.

- *[ Demo - Browser ]*

---

### /reactivity/solution

- Legacy: 
  - jQuery
    - released in August 26, 2006
    - author: John Resig
      - Known for: jQuery; Processing.js; Secrets of the JavaScript Ninja; Pro JavaScript Techniques (highly recommend reading dem books)
      - [Learning Advanced JavaScript](https://johnresig.com/apps/learn/)
    - heavily simplified DOM traversal and manipulation, animations, Ajax.
    - fun fact: MIT License

- Modern: (usual suspects)
  - Vue
  - React
  - Angular
  - Svelte
  - Aurelia
  - AlpineJS
  - Reef
  - RxJS?
  - you name it!

- Hardcore: 
  - Vanilla JS (i.e ES6 Proxy & Reflect, [there are other ways, too lazy and/or ignorant to name them])

---
---

### /chat

**You**: BUT WAIT? These solutions are for browsers only right? and your talk says **EVERYWHERE**!! 😠 

**Me**: ... 😰 Implement something using Proxy and Reflect? How hard can it be?!

**You**: No way! Are you crazy? I got better things to do! 😡 

**Me**: 🤔

---
---

### /reactivity/solution/everywhere

Vue 3 is just around the corner and sports a function-based API approach which exposes some powerful functionalities.

What does that mean?

- For the sake of this talk, let's say we get to *steal* its, now standalone, reactivity system and use it **anywhere** we want. It's framework-agnostic! 🤯
  - Conventional:
    - in a legacy app with no (proper) reactivity system
    - in other frameworks lol.. why not? 🤷🏽‍♂
    - in your (insert name here) upcoming epic framework
  - Unconventional:
    - in node applications (e.g CLI, server, etc)
---

### /chat

**Me**: *Demo time!* 😎

---

### /refs
- [Understanding Reactivity in Vue 3.0 by Jin Jiang](https://dev.to/jinjiang/understanding-reactivity-in-vue-3-0-1jni)
- [Oscar Spencer's Talk @ VueConf US 2020](https://www.youtube.com/watch?v=pDxiBourHFY)
- [Oscar Spencer's Blog Post](https://blog.tidelift.com/unconventional-vue-vue-as-a-backend-framework)