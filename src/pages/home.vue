<template>
  <q-page>
    <div>
    <!--carousel-->
    <q-carousel
      animated
      v-model="slide"
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="https://suluh.co/wp-content/uploads/2019/02/Pantai-Marina-Lampung-Selatan.jpg">
        <div class="absolute-bottom custom-caption">
        <div class="text-h2">Jelajahi Alam Lampung</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn2.tstatic.net/tribunnews/foto/bank/images/menara-siger_20150807_072400.jpg">
        <div class="absolute-bottom custom-caption">
        <div class="text-h2">Temukan Destinasi Wisatamu</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.pergidulu.com/wp-content/uploads/2018/03/Puncak-Mas-Sukadanaham-Lampung.jpg">
        <div class="absolute-bottom custom-caption">
        <div class="text-h2">Hilangkan Penat Dengan Berlibur</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!--baris-->
    <div class="row q-mt-md q-mb-sm">
      <div class="col"/>
      <div class="col">
        <div class="text-h6 text-bold text-primary text-center">APA YANG ANDA BUTUHKAN?</div>
      </div>
      <div class="col" />
    </div>
    <!--baris-->
    <div class="row">
    <div class="col" />
    <div class="col">
    <!--card-->
    <q-card class="my-card">
      <q-card-section>
        <q-icon name="terrain" style="font-size: 150px;" class="q-ml-sm text-primary" />
        <q-btn class="text-primary q-ml-lg" to="/" flat>Destination</q-btn>
      </q-card-section>
    </q-card>
    </div>
    <div class="col">
    <!--card-->
    <q-card class="my-card">
      <q-card-section>
        <q-icon name="place" style="font-size: 150px;" class="q-ml-sm text-primary" />
        <q-btn class="text-primary q-ml-xl" to="/event" flat>Event</q-btn>
      </q-card-section>
    </q-card>
    </div>
    <div class="col">
    <!--card-->
    <q-card class="my-card">
      <q-card-section>
        <q-icon name="emoji_transportation" style="font-size: 150px;" class="q-ml-sm text-primary" />
        <q-btn class="q-ml-lg text-primary" to="/akomodasi" flat>Akomodasi</q-btn>
      </q-card-section>

    </q-card>
    </div>
    <div class="col" />
    </div>
    <!--baris-->
    <div class="row q-mt-md q-mb-sm">
      <div class="col">
        <div class="text-h6 text-bold text-primary text-center">TEMPAT WISATA PILIHAN</div>
      </div>
    </div>
    <!--baris-->
    <div class="row q-col-gutter-md">
      <div class="q-ml-md" v-for="(wisata, i) in data" :key="i">
        <q-card class="" >
            <q-img :ratio="16/9" :src="`${$baseImageURL}/${wisata.image}`" />
            <q-card-section>
              <q-rating v-model="wisata.rating" readonly :max="5" size="32px" />
                <div class="text-h6">{{ wisata.namatempat}}</div>
                <div class="text-subtitle1">{{ wisata.lokasi}}</div>
            </q-card-section>
            <q-card-section>
              <q-btn dense  @click="opendetail(wisata)"  class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
            </q-card-section>
            </q-card>
        </div>
    </div>
  </div>
  <q-dialog v-model="dialog" v-if="dialog">
          <q-card style="width: 500px">
            <q-card-section>
              <div class="text-h6">Detail</div>
              <q-img :ratio="16/9" :src="`${$baseImageURL}/${activeData.image}`" />
            </q-card-section>
            <q-card-section style="max-height: 509vh" class="scroll">
              Rating
              <q-rating v-model="activeData.rating" readonly :max="5" size="32px" />
              <div>
                Fasilitas:{{ activeData.fasilitas }}
              </div>
              <div>
                Deskripsi:
              </div>
              <div>
                {{ activeData.deskripsi }}
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn label="Batal" flat @click="dialog = false"/>
            </q-card-actions>
          </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      namatempat: null,
      lokasi: null,
      image: null,
      data: [],
      dialog: false,
      activeData: null
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$axios.get('wisata/getall')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data.map(wisata => {
              return Object.assign(wisata, {
                expanded: false
              })
            })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    },
    opendetail (data) {
      this.activeData = data
      this.dialog = true
    },
    prosesTransaksi () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify({
        idUser: this.$q.localStorage.getItem('dataUser')._id,
        idFilm: this.activeData._id,
        harga: this.activeData.harga,
        jumlah: this.jumlah,
        total: this.total
      }))
      this.$axios.post('wisata/insert', formData)
        .then(res => {
          if (res.data.sukses) {
            console.log(res)
            this.$showNotif(res.data.pesan, 'positive')
            this.dialog = false
            this.image = null
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 200px
  height: 100%
  max-height: 300px
.my-cards
  width: 100%
  max-width: 300px
  height: 100%
  max-height: 300px
.custom-caption
  text-align: left
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .0)
.btn-fixed-width
  width: 270px
</style>
