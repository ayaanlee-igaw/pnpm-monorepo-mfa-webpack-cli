# MFA

```
"build": "pnpm --parallel --filter \"./**\" build",
"build:token": "pnpm --parallel --filter \"@monorepo/design-system\" build:token",
"serve": "pnpm --parallel --filter \"./**\" serve",
"lint": "pnpm --parallel --filter \"./**\" lint",
"lint:fix": "pnpm --parallel --filter \"./**\" lint:fix",
"main": "pnpm --filter \"@monorepo/main\"",
"design-system": "pnpm --filter \"@monorepo/design-system\"",
"design-system-compoments": "pnpm --filter \"@monorepo/design-system-compoments\""
```

- 토큰 변환: pnpm build:token
- 특정 마이크로 앱 사용 예시
  - pnpm main add element-plus
  - pnpm main add eslint --save-dev
  - pnpm main serve

## Stack

- pnpm
- **Run-time** Integration via javascript
    - vue3
    - webpack5 module federation
- typescript
- scss

### pnpm

![image](https://github.com/ayaanlee-igaw/pnpm-monorepo-mfa-webpack-cli/assets/117155989/7acbbb15-a329-4237-b2e8-6035f6c0c982)

yarn berry는 packages 디렉터리 안에 workspace들을 관리하는 형태

지금은 pnpm을 사용하지만, 추후에 yarn berry 기능이 강력해질 경우 가능성을 열어두기 위해
미리 packages 디렉터리 안에 workspace가 있는 구조로 설계

```
// pnpm-workspace.yaml
packages:
  - 'packages/main'
  - 'packages/design-system-components'
  - 'packages/design-system'
```

### config

![image](https://github.com/ayaanlee-igaw/pnpm-monorepo-mfa-webpack-cli/assets/117155989/8ac4e5bf-2872-419d-aa04-788dd2e88d8c)


각각의 App이 있는 micro frontend 일지라도, eslint, prettier, tsconfig 들은 공통 요소들이 많음
-> 최상단에 config 디렉터리 하위에서 관리

더 세부적으로도 나눌 수 있음
tsconfig로 예시를 들면, node 서버가 있는 경우 tsconfnig.node.json 생성
혹은 빌드 관련된 설정은 tsconfig.build.json에 작성

```
// micro app1 eslint
module.exports = {
  extends: require.resolve('../../configs/eslint/.eslintrc.vue.js'),
};
```

이런식으로 불러오면 끝이다.

### 디자인 시스템

![image](https://github.com/ayaanlee-igaw/pnpm-monorepo-mfa-webpack-cli/assets/117155989/ea0579c7-8d45-4098-9bb1-076ef6b592b0)

디자인 토큰과 디자인 시스템은 design-system 이라는 dependency로 관리

```
// micro app1 package.json
"dependencies": {
    //...
    "element-plus": "^2.4.1",
    "@monorepo/design-system": "workspace:*"
  },
```

디자인 시스템을 사용하려는 micro app은 위와 같이 dependency를 추가

```
// micro app1 main.ts
import 'element-plus/dist/index.css';
import '@monorepo/design-system/src/styles/styles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import { router } from './router';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.mount('#app');
```

main.ts 설정은 위와 같다. element plus 스타일보다 디자인 시스템을 늦게 호출해야 함

```
// micro app1 vue.config.js (webpack setting)
shared: {
  vue: {
    singleton: true,
  },
  'element-plus': {
    singleton: true,
  },
},
```

element-plus와 같이 라이브러리를 사용하는데, 다른 마이크로 앱도 사용하고 있다면 shared
