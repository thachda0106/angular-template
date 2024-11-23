import { InjectionToken } from '@angular/core';
import { Request } from 'express';
import { Response } from 'express';

export const SERVER_REQUEST: InjectionToken<Request> = new InjectionToken(
  'SERVER REQUEST Token',
);
export const SERVER_RESPONSE: InjectionToken<Response> = new InjectionToken(
  'SERVER RESPONSE Token',
);
