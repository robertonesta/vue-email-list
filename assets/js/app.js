const { createApp } = Vue


  createApp({
    data() {
      return {
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mails: [],
        error: null
      }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
            .get(this.url)
            .then(response => {
                console.log(response.data);
                const mail = response.data.response 
                this.mails.push(mail)             

            }).catch(error => {
                console.error(error.message);
                this.error = error.message
            })
        }
    }
  }).mount('#app')

