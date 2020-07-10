<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="https://www.goodnewsfromindonesia.id/uploads/post/large-holbung-hill-view-at-toba-lake-sumatera-indonesia-0c6f46cefbcf08ccb86f5df01e34be43.jpg" >
      <div class="absolute-bottom custom-caption">
          <div class="text-h2">Danau Toba</div>
          <div class="text-subtitle2">Sumatra Barat</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://www.batiqa.com/upload/news/l/lampung-pantai-gigi-hiu_3mnwt.jpg" >
      <div class="absolute-bottom custom-caption">
          <div class="text-h2">Pantai Gigi Hiu</div>
          <div class="text-subtitle2">Lampung</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn2.tstatic.net/palembang/foto/bank/images/danau-ranau_20171217_131220.jpg" >
            <div class="absolute-bottom custom-caption">
          <div class="text-h2">Danau Ranau</div>
          <div class="text-subtitle2">Lampung</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://non-indonesia-distribution.brta.in/2017-11/shutterstock-625093535_1511683187.jpg" >
            <div class="absolute-bottom custom-caption">
          <div class="text-h2">Taman Way Kambas</div>
          <div class="text-subtitle2">Lampung</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="sumatra" label="Sumatra" />
          <q-tab name="jawa" label="Jawa" />
          <q-tab name="bali" label="Bali" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="sumatra">
            <div class="text-h6">Tempat Wisata Sumatra</div>
            <!--banner1-->
            <q-banner rounded class="bg-grey-3">
              <template v-slot:avatar>
                <img
                  src="https://www.goodnewsfromindonesia.id/uploads/post/large-holbung-hill-view-at-toba-lake-sumatera-indonesia-0c6f46cefbcf08ccb86f5df01e34be43.jpg"
                  style="width: 100px; height: 64px"
                >
              </template>

              <div class="text-h6 text-bold">Danau Toba</div>
              <div class="text-subtitle1">Sumatra Barat</div>
              <template v-slot:action>
                <q-btn flat class="text-primary" label="Selengkapnya" />
              </template>
            </q-banner>
            <!--banner2-->
            <q-banner rounded class="bg-grey-3">
              <template v-slot:avatar>
                <img
                  src="https://cdn2.tstatic.net/palembang/foto/bank/images/danau-ranau_20171217_131220.jpg"
                  style="width: 100px; height: 64px"
                >
              </template>

              <div class="text-h6 text-bold">Danau Ranau</div>
              <div class="text-subtitle1">Lampung</div>
              <template v-slot:action>
                <q-btn flat class="text-primary" label="Selengkapnya" />
              </template>
            </q-banner>
          </q-tab-panel>

          <q-tab-panel name="jawa">
            <div class="text-h6">Tempat Wisata Jawa</div>
            <!--banner1-->
            <q-banner rounded class="bg-grey-3">
              <template v-slot:avatar>
                <img
                  src="https://www.yangrame.com/wp-content/uploads/2019/02/farm-house-1-678x300.jpg"
                  style="width: 100px; height: 64px"
                >
              </template>

              <div class="text-h6 text-bold">Farm House Lembang</div>
              <div class="text-subtitle1">Bandung</div>
              <template v-slot:action>
                <q-btn flat class="text-primary" label="Selengkapnya" />
              </template>
            </q-banner>
            <!--banner2-->
            <q-banner rounded class="bg-grey-3">
              <template v-slot:avatar>
                <img
                  src="https://wisatangehits.com/wp-content/uploads/2018/01/Lokasi-Dan-Harga-Tiket-Masuk-Curug-Bidadari-Sentul.jpg"
                  style="width: 100px; height: 64px"
                >
              </template>

              <div class="text-h6 text-bold">Curug Bidadari</div>
              <div class="text-subtitle1">Bogor</div>
              <template v-slot:action>
                <q-btn flat class="text-primary" label="Selengkapnya" />
              </template>
            </q-banner>
          </q-tab-panel>

          <q-tab-panel name="bali">
            <div class="text-h6">Tempat Wisata Bali</div>
            <!--banner1-->
            <q-banner rounded class="bg-grey-3">
              <template v-slot:avatar>
                <img
                  src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/Kuta_1.jpg"
                  style="width: 100px; height: 64px"
                >
              </template>

              <div class="text-h6 text-bold">Pantai Kuta</div>
              <div class="text-subtitle1">Bali</div>
              <template v-slot:action>
                <q-btn flat class="text-primary" label="Selengkapnya" />
              </template>
            </q-banner>
            <!--banner2-->
            <q-banner rounded class="bg-grey-3">
              <template v-slot:avatar>
                <img
                  src="https://yoexplore.co.id/wp-content/uploads/2018/10/bali-1870797_1920.jpg"
                  style="width: 100px; height: 64px"
                >
              </template>

              <div class="text-h6 text-bold">Gunung Batur</div>
              <div class="text-subtitle1">Bali</div>
              <template v-slot:action>
                <q-btn flat class="text-primary" label="Selengkapnya" />
              </template>
            </q-banner>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      tab: 'sumatra'
    }
  }
}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: left
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .0)
</style>
