## To configure each project

When creating a react project that will live in the world of vtex, please base your project on [hello-react-ts] (https://github.com/grupo-exito-ecommerce/hello-react-ts) and also Follow the following recommendations:

1. Change the project's `tsconfig` to the` hello-react-ts`.

2. Add `tsconfig-types` (it is in` hello-react-ts`).

3. Create `index.ts` in react root (only if other projects still don't call that index).

4. Add index.ts in the `vtexigniore` (only if other projects still don't call that index).

`` ''
* CAUTION * react / index.ts * CAUTION *

react / tsconfig-types.json
react / __ mocks__
react / __ tests__
react / tslint
react / sonar-project.properties
`` ''

5. Add generated types folder (project must be called the same and found in the root of / react) to `gitignore`.

6. Add `.prettierrc`,` tslint.json`, library to validate hooks rule (all these files are in `hello-react-ts`)

`` ''
yarn add tslint-react-hooks
`` ''

7. Correct typings folder, delete unnecessary things and try to carry the following format:

`` ''
typings:
│
.D files.d.ts
.D index.d.ts
│ global.d.ts (only if you are going to use declare global)
│
Iblibs
.D index.d.ts
│ react-select.d.ts (create files by library, if there is more than one type of said library, but all put it in index.d.ts)
│
Texvtex
        index.d.ts
        vtex.store-components.d.ts (create files per component, if there is more than one type of said component, but all put it in index.d.ts)
`` ''

### To work in the typings folder

Please follow the following rules:

- There are 2 proposed folders libs and vtex and the root (could be more but with arguments).

- The `libs` folder is intended for all those types related to third-party libraries that do not have types,
  Most of these libraries already have their own types in the original repository or in the DefinitelyTyped repository on github.

- In `libs / index.d.ts` put only` declare module 'name-of-your-library'; `if you want to be more specific and define more types of a library
  like for example something like this:

  `` js
    declare module 'react-select / lib / components / containers' {
      export {ValueContainerProps};
    }
  `` ''

  In this case it is valid to create a new file inside the `libs` folder with the name of your library, in the case of the previous example create` libs / react-select.d.ts`.

- The `vtex` folder is intended for all types related to vtex projects, most of which are in [vtex-apps github] (https://github.com/) vtex-apps and in [vtex github] ( https://github.com/vtex).

- The idea is that in the vtex folder we add only the types of projects that are not already typed in this repository,
  such as the project `vtex.render-runtime` which must be manually defined in` vtex / index.d.ts` as
  `declare module 'vtex.render-runtime';` since this is quite complicated to generate types for it automatically.

- Apply rule # 3 equally for the `vtex / index.d.ts` file.

8. Make link in vtex of the project and correct errors.

9. Add script to package.json (yarn get-types) and run it.

json
"get-types": "rm -rf colombianpoints. $ {project name} && tsc -p tsconfig-types.json --outDir colombianpoints. $ {project name}"
`` ''

10. Document changes in `manifest` and` CHANGELOG`.

11. Install type library.

`` ''
yarn add -D types-puntocolombia
`` ''

## If you have any doubt or improvement with what is proposed, please do not hesitate to discuss it with the team.