
## Architecture

### Tech-stack

![tech-stack](https://user-images.githubusercontent.com/953015/61521948-45fdad00-aa4c-11e9-82a6-ccbd7138c864.png)

### Classes and data-flow

![flux](https://user-images.githubusercontent.com/953015/61521941-439b5300-aa4c-11e9-8c60-69efc3f6fa20.png)

### Classes on Clean Architecture

![clean-architecture](https://user-images.githubusercontent.com/953015/61521926-3e3e0880-aa4c-11e9-84fa-9e89d2b7f9b6.png)

## Development

### How to start


#### boiderplate-admin

```
# to run boiderplate-admin
yarn start:boiderplate-admin
```

### Deploy flow

#### console

![deploy-flow](https://user-images.githubusercontent.com/953015/61761741-9ab57500-ae0a-11e9-9e36-46bfbf541719.png)

### Environments

| env name     | end point                              | branch to trigger deploy                              | Basic Auth | s3 bucket name           |
| ------------ | -------------------------------------- | ----------------------------------------------------- | ---------- | ------------------------ |
| frontend-dev | https://d2o801guu88kfa.cloudfront.net/ | release-frontend\/.\* (Ex:release-frontend/20200213 ) | yes        | fsra-regbot-frontend-stg |
