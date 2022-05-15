import dva from 'dva';
import { createBrowserHistory } from 'history';
import { version } from '../package.json';
import { Routes } from './routes';
import models from './models';
import { prodLog } from './utils/log';
import './reset.css';
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

prodLog(`v${version}`);
prodLog(`
   _____            _______                   
  / ____|          |__   __|                  
 | |     _ __ ____    | | ___  __ _ _ __ ___  
 | |    | '__|_  /    | |/ _ \\/ _\` | '_ \` _ \\ 
 | |____| |   / /     | |  __/ (_| | | | | | |
  \\_____|_|  /___|    |_|\\___|\\__,_|_| |_| |_|
`);

const app = dva({
  history: createBrowserHistory(),
});

models.forEach((m) => {
  app.model(m as any);
});

app.router(Routes);

app.start('#root');
