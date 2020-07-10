<template>
  <q-page class="bg-grey">
    <q-card class="fixed-center my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6 text-center">LOGIN</div>
        <div class="text-subtitle2 text-center">only for admin</div>
      </q-card-section>

      <q-card-section>
        <q-input dense v-model="username" filled type="email" hint="Email" />
        <q-input dense v-model="pass" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="onSubmit">Login</q-btn>
        <q-btn flat to="/">Kembali</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      pass: null,
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/login', {
        username: this.username,
        password: this.pass
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.Pesan
          })
          this.$router.push('/homeadmin')
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.Pesan
          })
        }
      })
    },
    onReset () {
      console.log('ini tombol reset')
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 550px
  height: 100%
  max-height: 300px
</style>
