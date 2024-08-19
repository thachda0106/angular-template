import { InjectionToken } from '@angular/core';
import { Request, Response } from 'express';

export const REQUEST = new InjectionToken<Request>('app.request description');
export const RESPONSE = new InjectionToken<Response>(
  'app.response description',
);
