<template>
  <q-page padding>
    <div class="text-center text-h5 text-bold text-primary">Edit Event</div>
    <q-input dense class="q-mr-md q-ml-md" v-model="judul" label="Judul" :rules="[ val => val && val.length > 0 || 'Please type something']" />
    <q-input dense class="q-mr-md q-ml-md" v-model="tanggal" label="Tanggal" :rules="[ val => val && val.length > 0 || 'Please type something']" />
    <q-input dense class="q-mr-md q-ml-md" v-model="lokasi" label="Lokasi" :rules="[ val => val && val.length > 0 || 'Please type something']" />
    <q-input
              label="Masukan Deskripsi"
              v-model="isi"
              filled
              type="textarea"
            />
    <div class="q-mt-md">
      <q-btn label="Input" @click="onSubmit()" color="primary"/>
    <q-btn label="Batal" to="/homeadmin" color="indigo-10" class="q-ml-md"/>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      isi: null,
      tanggal: null,
      lokasi: null,
      judul: null
    }
  },
  created () {
    this.getdata()
  },

  methods: {
    getdata () {
      this.$axios.get('/event/tampilsatu/' + this.$route.params.id)
        .then(res => {
          console.log(res.data.data)
          this.judul = res.data.data[0].judul
          this.tanggal = res.data.data[0].tanggal
          this.lokasi = res.data.data[0].lokasi
          this.isi = res.data.data[0].isi
        })
    },
    onSubmit () {
      this.$axios.put('event/edit/' + this.$route.params.id, {
        judul: this.judul,
        tanggal: this.tanggal,
        lokasi: this.lokasi,
        isi: this.isi
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push('/homeadmin')
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    }
  }
}
</script>
