const app = Vue.createApp({
    data() {
        return {
            firstName: 'yun',
            lastName: 'ey',
            email: 'dmsdud322@naver.com',
            gender: 'female',
            thumbnail: 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    },
    methods: {
        changeUser: async function() {
            const res = await fetch('https://randomuser.me/api')
            .then((response) => response.json())
            .then((data) => {
                const result = data.results[0];
                this.firstName = result.name.first,
                this.lastName = result.name.last,
                this.email = result.email,
                this.gender = result.gender,
                this.thumbnail = result.picture.large
            });
        }
    }
});

app.mount('#app');