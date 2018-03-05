import {StateProvider} from '@uirouter/angularjs';
import {ROOT_COMPONENT} from './components/root/root.component';

export function routing($stateProvider: StateProvider) {
    $stateProvider.state('customers', {
        name: 'root',
        url: '/customers',
        component: ROOT_COMPONENT
    });
}