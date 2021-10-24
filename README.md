# Documentation

## Push

1. Commit new changes, trigger `Husky` to run test and `lint-staged` pre-commit
2. Commit successful, Trigger Github Actions on push to `master` branch, runs on `ubuntu-latest`
3. Run Lint (`ESlint` to find potential bugs, `Prettier` for code formatting)
4. Run Test (`Mocha` and `Chai`)
5. Deploy `Docker` image to `Heroku` (container has same stack [```ubuntu-latest```] with `Heroku` stack)
6. (Optional) Run `yarn test` on docker, not really needed since Github Actions CI environment is also `ubuntu-latest`, same environment as Docker and Heroku

## PR

1. Commit new changes, trigger `Husky` to run test and `lint-staged` pre-commit
2. Commit successful, Trigger Github Actions on pull request to `master` branch, runs on `ubuntu-latest`
3. Run Lint (`ESlint` to find potential bugs,`Prettier` for code formatting)
4. Run Test (`Mocha` and `Chai`)
5. Merge Pull Request
6. Deploy `Docker` image to `Heroku` (container has same stack [```ubuntu-latest```] with `Heroku` stack)
7. (Optional) Run `yarn test` on docker, not really needed since Github Actions CI environment is also `ubuntu-latest`, same environment as Docker and Heroku

Note: If ```dev``` branch, use Dev Dockerfile and push to Dev Heroku app in project pipeline, if ```prod``` use otherwise.

# Tools

1. `Husky` git hooks to specify scripts that run on events e.g pre-commit, post-commit
2. `Lint-staged` only lint staged files that is to be commited, because linting all files could be slow
3. `ESlint` find potential bug in code
4. `Prettier` code formatting issue
5. `Mocha` framework that allows async testing, test coverage report and assertion
6. `Chai` BDD/TDD assertion library
7. `Github Actions` scripts to specify CI/CD process in this repo
8. `Heroku` deployment
9. `Docker` https://www.microfocus.com/documentation/enterprise-developer/ed40pu5/ETS-help/GUID-F5BDACC7-6F0E-4EBB-9F62-E0046D8CCF1B.html

# Resources

https://github.com/typicode/husky
https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/

https://github.com/okonet/lint-staged

https://github.com/prettier/eslint-config-prettier
https://prettier.io/docs/en/integrating-with-linters.html
https://prettier.io/docs/en/comparison.html

https://itnext.io/how-to-make-tests-using-chai-and-mocha-e9db7d8d48bc

https://dev.to/michaelcurrin/intro-tutorial-to-ci-cd-with-github-actions-2ba8
https://stackoverflow.com/questions/63220262/github-workflow-one-job-for-each-different-git-actions-push-on-master-push-t
https://stackoverflow.com/questions/67257142/run-github-action-when-pushing-to-a-certain-branch

https://devcenter.heroku.com/articles/procfile#procfile-and-heroku-yml

set stack as container: `heroku stack:set container --app express-boilerplate-ci-cd`
dev app logs: `heroku logs --app=express-boilerplate-dev`
prod app logs: `heroku logs --app=express-boilerplate-prod`
https://stackoverflow.com/questions/52630404/how-to-install-packages-based-on-the-lock-file-with-yarn
https://stackoverflow.com/questions/30256386/how-to-copy-multiple-files-in-one-layer-using-a-dockerfile
https://stackoverflow.com/questions/42040317/cannot-find-module-for-a-node-js-app-running-in-a-docker-compose-environment
https://stackoverflow.com/questions/46440909/how-to-configure-different-dockerfile-for-development-and-production
https://youtu.be/4axmcEZTE7M
