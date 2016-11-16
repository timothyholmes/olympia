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
        el: '#app',
        data: {
            message: 'Nav bar2'
        }
    });
})();
