'use strict';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

import {AppComponent} from './app.component';
import {appRouterProviders} from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));
