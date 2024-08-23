import { InjectionToken } from '@angular/core';
import { Request } from 'express';
import { Response } from 'express';

export const REQUEST: InjectionToken<Request> = new InjectionToken(
  'REQUEST Token',
);
export const RESPONSE: InjectionToken<Response> = new InjectionToken(
  'RESPONSE Token',
);
