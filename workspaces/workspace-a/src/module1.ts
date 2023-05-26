import { config } from 'node-config-ts';

export function someFunctionA(){
  console.log('Hello from workspace-a, Module1', config?.SOME_PROPERTY);
}

someFunctionA();