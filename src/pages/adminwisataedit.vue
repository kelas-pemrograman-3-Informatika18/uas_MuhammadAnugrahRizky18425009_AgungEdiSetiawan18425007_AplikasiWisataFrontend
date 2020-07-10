<template>
  <q-page padding>
    <div class="text-center text-h5 text-bold text-primary">Edit Event</div>
    <q-card flat>
      <q-form
          @submit="onSubmit()"
          @reset="onReset()"
        >
        <q-input
          filled
          dense
          v-model="form.namatempat"
          label="Nama tempat"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          dense
          v-model="form.lokasi"
          label="Lokasi"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          dense
          v-model="form.fasilitas"
          label="Fasilitas"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <div>
          Pilih Rating
          <q-rating
          v-model="form.rating"
          size="2em"
          :max="5"
          color="primary"
        />
        </div>

        <q-input
          label="Deskripsi"
          v-model="form.deskripsi"
          filled
          type="textarea"
        />

        <q-file accept="jpg, image/*" color="teal" filled v-model="image" label="Upload Gambar">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Batal" to="/datawisata" color="indigo-10" class="q-ml-md"/>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      form: {
        deskripsi: null,
        rating: 0,
        namatempat: null,
        lokasi: null,
        fasilitas: null
      },
      image: null
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$axios.get('wisata/getbyid/' + this.$route.params.id)
        .then(res => {
          if (res.data.sukses) {
            this.form = res.data.data
          } else {
            this.$router.push({ name: 'datawisata' })
          }
        })
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.put(`wisata/edit/${this.$route.params.id}`, formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'datawisata' })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
