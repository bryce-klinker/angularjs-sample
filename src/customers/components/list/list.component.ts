import * as angular from 'angular';

import {CUSTOMERS_MODULE} from '../../module.name';

export const LIST_COMPONENT = `${CUSTOMERS_MODULE}.list`;
angular.module(CUSTOMERS_MODULE)
    .component(LIST_COMPONENT, {
        templateUrl: require('./list.template.html'),
        controller: () => {}
    });