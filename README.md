# Creating modals in React Framer Motion

[![Netlify Status](https://api.netlify.com/api/v1/badges/78eb75d8-48e8-4356-b2d9-1247acc0e97a/deploy-status)](https://app.netlify.com/sites/react-framer-demo/deploys)

1. [Features](#features-include)
2. [Installation](#installation)
3. [Set up](#set-up)

## What is Framer Motion?

Framer Motion is a relatively new open source, production-ready animation library for React developers.

[Framer Motion docs](https://framer.com/api/motion)

### Features include:

- Spring animations
- Simple keyframes syntax
- Gestures (drag/tap/hover)
- Layout and shared layout animations
- SVG paths
- Exit animations
- Server-side rendering
- Variants that orchestrate animations across components
- CSS variables

## Installation

Create a new React project

```sh
$ npx create-react-app framer-demo
```

Open your new React app

```sh
$ cd react-framer-demo
```

Install the Framer Motion package

```sh
$ npm i framer-motion
```

## Set up

#### Project structure

```
framer-demo
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── hooks
    │   └── useModal.jsx
    ├── components
    │   ├── Modal
    │   │   └── index.jsx
    │   ├── Backdrop
    │   │   └── index.jsx
    │   ├── Notification
    │   │   └── index.jsx
    │   └── Input
    │       └── index.jsx
    ├── App.jsx
    ├── stateLogger.js
    ├── arr-utils.js
    ├── index.css
    └── index.js
```
