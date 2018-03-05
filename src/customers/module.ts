import * as angular from 'angular';
import {COMMON_DEPENDENCIES} from '../shared';
import {CUSTOMERS_MODULE} from './module.name';

const module = angular
    .module(CUSTOMERS_MODULE, COMMON_DEPENDENCIES);

import './components';
import {routing} from './routing';
export default module.run(routing).name;


