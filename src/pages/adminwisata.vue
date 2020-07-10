<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <div class="text-center text-h5 text-bold text-primary">Edit Tempat Wisata</div>
        <q-card flat>
      <q-card-section>
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

        <q-file class="q-mt-md" accept="jpg, image/*" color="teal" filled v-model="image" label="Upload Gambar">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <div>
          <q-btn class="q-mt-md" label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
      </q-card-section>
    </q-card>
      </div>
      <div class="col">
        <q-table
      title="List Tempat Wisata"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="namatempat" :props="props">
            {{ props.row.namatempat }}
          </q-td>
          <q-td key="lokasi" :props="props">
             {{ props.row.lokasi }}
          </q-td>
          <q-td key="fasilitas" :props="props">
            {{ props.row.fasilitas }}
          </q-td>
          <q-td key="deskripsi" :props="props">
            <div class="ellipsis" style="max-width: 200px">
              {{ props.row.deskripsi }}
            </div>
          </q-td>
          <q-td key="image" :props="props">
            <q-img
              :src="`${$baseImageURL}/${props.row.image}`"
              spinner-color="white"
            />
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="col q-gutter-xs">
              <q-btn dense label="Edit" :to="{ name:'editwisata', params: { id:props.row._id} }" icon="edit" color="warning" />
              <q-btn dense @click="deletewisata(props.row._id)" label="Hapus" icon="edit" color="red" />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
      </div>
    </div>
  </q-page>

</template>
<script>
export default {
  data () {
    return {
      form: {
        namatempat: null,
        lokasi: null,
        fasilitas: null,
        rating: 0,
        deskripsi: null
      },
      image: null,
      columns: [
        { name: 'namatempat', align: 'left', label: 'Nama Tempat', field: 'namatempat', sortable: true },
        { name: 'lokasi', align: 'left', label: 'Lokasi', field: 'lokasi', sortable: true },
        { name: 'fasilitas', align: 'left', label: 'Fasilitas', field: 'fasilitas', sortable: true },
        { name: 'deskripsi', align: 'left', label: 'Deskripsi', field: 'deskripsi', sortable: true },
        { name: 'image', align: 'left', label: 'Gambar', field: 'image', sortable: true },
        { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi', sortable: true }
      ],

      data: []
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.post('wisata/insert', formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.getdata()
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    },
    deletewisata (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`wisata/delete/${id}`)
          .then(res => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getdata()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
      })
    },
    getdata () {
      this.$axios.get('wisata/getall')
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$showNotif(res.data.pesan, 'Negative')
          }
        })
    }
  }
}
</script>
<style scoped>
.left {
  width: 5px;
  height: 100%;
  background-color: rgb(14, 14, 100);
}
</style>
