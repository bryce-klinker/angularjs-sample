import {StateProvider} from '@uirouter/angularjs';

export default function routing($stateProvider: StateProvider) {
    $stateProvider.state('main', {
        redirectTo: '/customers'
    })
}