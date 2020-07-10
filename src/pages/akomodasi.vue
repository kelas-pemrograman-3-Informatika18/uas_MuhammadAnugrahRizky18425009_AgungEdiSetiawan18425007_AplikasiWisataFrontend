<template>
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
      <q-carousel-slide :name="1" img-src="https://www.goodnewsfromindonesia.id/uploads/post/large-737-max-ga-4894a6b3f0e03b380b50d91aeac7c000.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Berbagai Akomodasi Untuk Memudahkan Perjalanan</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://r-cf.bstatic.com/images/hotel/max1280x900/114/114282930.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Ratusan Pilihan Hotel Yang Nyaman Dan Berkualitas</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!--baris-->
  <div class="row q-ml-md">
    <div class="text-primary text-bold text-h4 col">Pemesanan Pesawat</div>
  </div>
  <!--baris-->
  <div class="row q-ml-md q-gutter-md">
  <!--colom1-->
    <div class="col">
      <q-card class="my-cards">
      <q-img class="my-cards" src="https://www.harianhaluan.com/assets/berita/original/99791255639-tra.jpg">
      </q-img>

      <q-card-actions class="bg-grey-4">
        <div class="text-h6">Traveloka</div>
        <q-btn dense type="a" href="https://www.traveloka.com/id-id/tiket-pesawat" target="_blank"  class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
      </q-card-actions>
      </q-card>
      </div>
  <!--colom2-->
    <div class="col-9">
      <q-card class="my-cards">
      <q-img class="my-cards" src="https://pbs.twimg.com/profile_images/1169513765999542274/eFSAZqtr_400x400.jpg">
      </q-img>

      <q-card-actions class="bg-grey-4">
        <div class="text-h6">Tiket.Com</div>
        <q-btn dense type="a" href="https://www.tiket.com" target="_blank"  class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
      </q-card-actions>
      </q-card>
      </div>
  </div>
    <!--barkol-->
    <div class="column" style="height: 130px">
      <div class="col-8"></div>
      <div class="col-4">
        <div class="row q-ml-md">
          <div class="text-primary text-bold text-h4 col">Pemesanan Hotel</div>
        </div>
        <!--baris-->
        <div class="row q-ml-md q-gutter-md">
          <!--colom1-->
          <div class="col">
            <q-card class="my-cards">
              <q-img class="my-cards" src="https://media.suara.com/pictures/970x544/2020/02/17/87106-logo-reddoorz.jpg">
              </q-img>

              <q-card-actions class="bg-grey-4">
                <div class="text-h6">RedDoorz</div>
                <q-btn dense type="a" href="https://www.reddoorz.com" target="_blank"  class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
              </q-card-actions>
            </q-card>
          </div>
          <!--colom2-->
          <div class="col-9">
            <q-card class="my-cards">
              <q-img class="my-cards" src="https://cdn10.agoda.net/images/mvc/default/agoda-logo-flat-2019.png">
              </q-img>

              <q-card-actions class="bg-grey-4">
                <div class="text-h6">Agoda</div>
                <q-btn dense type="a" href="https://www.agoda.com" target="_blank"  class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <!--barkol bus-->
    <div class="column" style="height: 350px">
      <div class="col-8"></div>
      <div class="col-4">
        <div class="row q-ml-md">
          <div class="text-primary text-bold text-h4 col">Pemesanan Bus</div>
        </div>
        <!--baris-->
        <div class="row q-ml-md q-gutter-md">
          <!--colom1-->
          <div class="col">
            <q-card class="my-cards">
              <q-img class="my-cards" src="https://kompaskerja.com/wp-content/uploads/2020/01/logo-baru-damri.jpg">
              </q-img>

              <q-card-actions class="bg-grey-4">
                <div class="text-h6">Damri</div>
                <q-btn dense type="a" href="https://www.damri.co.id" target="_blank"  class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
              </q-card-actions>
            </q-card>
          </div>
          <!--colom2-->
          <div class="col-9">
            <q-card class="my-cards">
              <q-img class="my-cards" src="https://www.tourismvaganza.com/wp-content/uploads/2018/12/logo.jpg">
              </q-img>

              <q-card-actions class="bg-grey-4">
                <div class="text-h6">Redbus</div>
                <q-btn dense type="a" href="https://www.redbus.id" target="_blank" class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <!--barkol kereta-->
    <div class="column" style="height: 230px">
      <div class="col-8"></div>
      <div class="col-4">
        <div class="row q-ml-md">
          <div class="text-primary text-bold text-h4 col">Pemesanan Kereta</div>
        </div>
        <!--baris-->
        <div class="row q-ml-md q-gutter-md">
          <!--colom1-->
          <div class="col">
            <q-card class="my-cards">
              <q-img class="my-cards" src="https://upload.wikimedia.org/wikipedia/id/thumb/3/3d/Logo_PT_KAI_%28Persero%29_%28New_version_2016%29.svg/1200px-Logo_PT_KAI_%28Persero%29_%28New_version_2016%29.svg.png">
              </q-img>

              <q-card-actions class="bg-grey-4">
                <div class="text-h6">Kereta Api Indonesia</div>
                <q-btn dense type="a" href="https://www.kai.id" target="_blank" class="btn-fixed-width" color="primary" label="Lihat Selengkapnya" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    linkClick (e, go) {
      e.navigate = false // we choose when we navigate

      // console.log('triggering navigation in 2s')
      setTimeout(() => {
        // console.log('navigating as promised 2s ago')
        go()
      }, 2000)
    }
  },
  data () {
    return {
      slide: 1
    }
  }
}
</script>
<style lang="sass" scoped>
.my-cards
  width: 100%
  max-width: 300px
  height: 100%
  max-height: 150px
.img-card
  width: 100%
  max-width: 250px
  height: 100%
  max-height: 300px
.btn-fixed-width
  width: 350px
.custom-caption
  text-align: left
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .0)
</style>
