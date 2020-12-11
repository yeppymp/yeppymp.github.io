export default {
    state() {
        return {
            loading: false,
            isMenuOpen: false,
            menus: [
                {
                    url: '/',
                    name: 'Home'
                },
                {
                    url: '/about',
                    name: 'About'
                },
                {
                    url: '/educations',
                    name: 'Educations'
                },
                {
                    url: '/achievements',
                    name: 'Achievements'
                },
                {
                    url: '/experiences',
                    name: 'Experiences'
                },
                {
                    url: '/contact',
                    name: 'Contact'
                },
            ]
        };
    },
    getters: {},
    mutations: {
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
        TOGGLE_MENU(state) {
            state.isMenuOpen = !state.isMenuOpen;
        }
    },
    actions: {}
};
