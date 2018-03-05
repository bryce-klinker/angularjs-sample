import * as angular from 'angular';

import {CUSTOMERS_MODULE} from '../../module.name';

export const DETAIL_COMPONENT = `${CUSTOMERS_MODULE}.detail`;
angular.module(CUSTOMERS_MODULE)
    .component(DETAIL_COMPONENT, {
        templateUrl: require('./detail.template.html'),
        controller: () => {}
    });