<template>
  <q-page padding="">
    <div class="col">
      <div class="text-h5 text-center">Event</div>
      <q-card
        class="my-card"
        flat
        bordered
        v-for="now in now"
        :key="now.judul">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs">{{ now.judul }}</div>
            <div class="text-caption text-grey">
            </div>
            <div class="text-subitle2 text-grey">
                {{ now.isi }}
            </div>
          </q-card-section>

        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat>
            {{ now.tanggal }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      judul: null,
      isi: null,
      tanggal: null,
      now: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('event/tampil')
        .then(res => {
          console.log(res)
          if (res.data.sukses) {
            this.now = res.data.data
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
