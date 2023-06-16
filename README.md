# `waitUntil` generalized

`waitUntil` for usage outside of Service/Cloudflare Workers.

```bash
npm i wait-until-generalized
```

```js
import { WaitUntilList } from 'wait-until-generalized';

const { waitUntil, waitUntilSettled } = new WaitUntilList();

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

waitUntil(delay(1000).then(() => {
  console.log('Waited one second');
  waitUntil(delay(1000).then(() => {
    console.log('Waited another second');
  }));
}));

const results = await waitUntilSettled();

results.length // -> 2
```
