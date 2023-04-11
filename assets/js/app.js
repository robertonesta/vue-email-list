const { createApp } = Vue


  createApp({
    data() {
      return {
        emailGenerator: 10,
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mails: [],
        error: null
      }
    },
    mounted() {
        for (let i = 0; i < this.emailGenerator; i++) {
            axios
            .get(this.url)
            .then(response = {

            }).catch(error => {
                console.error(error.message);
                this.error = error.message
            })
        }
    }
  }).mount('#app')

