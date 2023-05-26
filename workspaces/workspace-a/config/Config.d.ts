/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    SOME_PROPERTY: string
  }
  export const config: Config
  export type Config = IConfig
}
