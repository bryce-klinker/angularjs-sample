import * as angular from 'angular';
import '../node_modules/angular-material/angular-material.css';

import customers from './customers/module';
import {COMMON_DEPENDENCIES, NAMESPACE} from './shared';
import routing from './routing';

angular.module(`${NAMESPACE}.main`, [
    ...COMMON_DEPENDENCIES,
    customers
])
    .run(routing)
    .name;