import * as angular from 'angular';

import {CUSTOMERS_MODULE} from '../../module.name';

export const ROOT_COMPONENT = `${CUSTOMERS_MODULE}.root`;
angular.module(CUSTOMERS_MODULE)
    .component(ROOT_COMPONENT, {
        templateUrl: require('./root.template.html'),
        controller: () => {}
    });