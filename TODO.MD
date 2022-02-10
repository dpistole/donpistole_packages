# TOFIX

### eslint import paths in donpistole-website

Normally we'd use eslint-import-plugin so that our direct-from-src imports do not throw lint errors.

```
import { Button } from 'components';

// where button is exported from ./src/components/index.ts
```

Because we're using a monorepo, and currently trying to share an eslint config at the root of the project, the imports (in VS code only) are throwing errors re: `cannot resolve 'components`.

The code compiles, presumably because the local-to-package tsconfig file includes the `./src` path.

Currently we're using relative paths, which are kinda gross once they get to a certain length (eg `../../../../../../components`.) Let's figure out why VS Code in throwing eslint errors on the absolutely path'd imports.

---
