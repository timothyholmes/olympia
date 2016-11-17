(function () {
    'use strict';

    let header,
        nav;

    header = new Vue({
        el: '#header',
        data: {
            title: 'Greenwood Olympia'
        }
    });

    nav = new Vue({
        el: '#nav-bar',
        data: {
            activeState: 'home',
            setActiveState: function (currentState) {
                this.activeState = currentState;
            }
        }
    });
})();
