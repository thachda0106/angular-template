import {
  mergeApplicationConfig,
  ApplicationConfig,
  inject,
  RESPONSE_INIT,
  REQUEST,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { SERVER_REQUEST, SERVER_RESPONSE } from '../core/tokens/express.tokens';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    {
      provide: SERVER_RESPONSE,
      useFactory: () => {
        return inject(RESPONSE_INIT, { optional: true });
      },
    },
    {
      provide: SERVER_REQUEST,
      useFactory: () => {
        return inject(REQUEST, { optional: true });
      },
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
