import {StateProvider} from '@uirouter/angularjs';
import {ROOT_COMPONENT} from './components/root/root.component';
import {LIST_COMPONENT} from './components/list/list.component';
import {DETAIL_COMPONENT} from './components/detail/detail.component';

export function routing($stateProvider: StateProvider) {
    $stateProvider.state('customers', {
        name: 'customers.root',
        url: '/customers',
        component: ROOT_COMPONENT
    });

    $stateProvider.state('customers.list', {
        name: 'customers.root.list',
        url: '/customers',
        component: LIST_COMPONENT
    })

    $stateProvider.state('customers.detail', {
        name: 'customers.root.detail',
        url: '/customers/:id',
        component: DETAIL_COMPONENT
    })
}