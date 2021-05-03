import { ForkEffect } from '@redux-saga/core/effects';

export interface ISagaParam<IPayload = {}> {
  type: string;
  payload: IPayload;
}

export type TExportRootSaga = ForkEffect<never>[];

export type TErrorControlState = 'await' | 'success' | 'error';
