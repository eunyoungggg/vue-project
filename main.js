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
                // console.log(data.results[0]);

                this.firstName = data.results[0].name.first,
                this.lastName = data.results[0].name.last,
                this.email = data.results[0].email,
                this.gender = data.results[0].gender,
                this.thumbnail = data.results[0].picture.large
            });
            // const { results } = await res.json();

            // this.firstName = results[0].name.first,
            // this.lastName = results[0].name.last,
            // this.email = results[0].email,
            // this.gender = results[0].gender,
            // this.thumbnail = results[0].picture.large
        }
    }
});

app.mount('#app');