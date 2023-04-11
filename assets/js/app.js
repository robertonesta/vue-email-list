const { createApp } = Vue


  createApp({
    data() {
      return {
        emailGenerator: 10,
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mails: []
      }
    },
    mounted() {
        for (let i = 0; i < this.emailGenerator; i++) {
            axios
            .get(this.url)
            .then(response = {
                
            })
        }

    }
  }).mount('#app')

