<template>
  <q-page padding>
    <div class="row">
      <div class="col q-mr-sm">
        <div class="text-center text-h5 text-bold text-primary">Input Event</div>
        <q-input dense class="q-mr-md q-ml-md" v-model="judul" label="Judul" :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input dense class="q-mr-md q-ml-md" v-model="tanggal" label="Tanggal" :rules="[ val => val && val.length > 0 || 'Please type something']" />
        <q-input dense class="q-mr-md q-ml-md" v-model="lokasi" label="Lokasi" :rules="[ val => val && val.length > 0 || 'Please type something']" />
            <q-input
              label="Masukan Deskripsi"
              v-model="isi"
              filled
              type="textarea"
            />
        <q-btn label="Submit" @click="input()" color="primary" class="q-mt-md"/>
      </div>
      <!--kanan-->
      <div class="col q-ml-sm">
        <q-table
        flat
        dense
        title="List Berita"
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="waktu" :props="props">
              {{ props.row.tanggal }}
            </q-td>
            <q-td key="judul" :props="props">
              {{ props.row.judul }}
            </q-td>
            <q-td key="lokasi" :props="props">
              {{ props.row.lokasi }}
            </q-td>
            <q-td key="aksi" :props="props">
                <div class="q-gutter-md">
                  <q-btn dense label="Edit" :to="{ name:'editadmin', params: { id: props.row._id}}" color="positive" icon="edit" unelevated></q-btn>
                  <q-btn dense @click="confirm(props.row._id)" label="Hapus" color="negative" icon="delete" unelevated></q-btn>
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
  name: 'PageIndex',
  data () {
    return {
      judul: null,
      tanggal: null,
      lokasi: null,
      isi: null,
      columns: [
        {
          name: 'waktu',
          required: true,
          label: 'Waktu',
          align: 'left',
          field: 'waktu',
          sortable: true
        },
        { name: 'judul', align: 'center', label: 'Judul', field: 'judul', sortable: true },
        { name: 'lokasi', align: 'center', label: 'Lokasi', field: 'lokasi', sortable: true },
        { name: 'aksi', label: 'Aksi', field: 'aksi', align: 'center' }
      ],
      data: []
    }
  },
  created () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$axios.get('event/tampil')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.pesan
            })
          }
        })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin Menghapus Data?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('event/hapus/' + id)
          .then((res) => {
            if (res.data.sukses) {
              this.$q.notify({
                type: 'positive',
                message: res.data.pesan
              })
              this.getdata()
            } else {
              this.$q.notify({
                type: 'negative',
                message: res.data.pesan
              })
            }
          })
      }).onCancel(() => {
        console.log('pembatalan')
      })
    },
    input () {
      this.$axios.post('event/input', {
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
          this.getdata()
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
