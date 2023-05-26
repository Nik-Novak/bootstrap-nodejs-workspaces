import { config } from 'node-config-ts';
import { someFunctionA } from '@bootstrap/workspace-a'

export function someFunctionB(){
  someFunctionA();
  console.log('Hello from workspace-b, Module1', config?.SOME_PROPERTY);
}

someFunctionB();