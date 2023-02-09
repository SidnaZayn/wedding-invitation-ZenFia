<template>
  <div class="row" style="height: 100vh">
    <div class="col-3 bg-secondary rounded-4 py-3 px-4">
      <h2 class="cal text-center mt-2 text-white">Sidna & Ariesty</h2>
      <p class="text-center my-0 text-white">Tanggal Pernikahan</p>
      <h3 class="text-center text-white">12/03/2023</h3>
      <section id="countdown" class="text-center mt-4">
        <h4 class="cal text-white" data-aos="flip-down">Menuju Acara</h4>
        <div class="row">
          <div class="text-center col-3" data-aos="flip-right">
            <div
              class="py-2 px-1 rounded-3 shadow-sm mb-2"
              style="background-color: #7b8fa1"
              id="hari"
            ></div>
            <p>Hari</p>
          </div>
          <div
            class="text-center col-3"
            data-aos="flip-right"
            data-aos-delay="200"
          >
            <div
              class="py-2 px-1 rounded-3 shadow-sm mb-2"
              style="background-color: #7b8fa1"
              id="jam"
            ></div>
            <p>Jam</p>
          </div>
          <div
            class="text-center col-3"
            data-aos="flip-right"
            data-aos-delay="300"
          >
            <div
              class="py-2 px-1 rounded-3 shadow-sm mb-2"
              style="background-color: #7b8fa1"
              id="menit"
            ></div>
            <p>Menit</p>
          </div>
          <div
            class="text-center col-3"
            data-aos="flip-right"
            data-aos-delay="400"
          >
            <div
              class="py-2 px-1 rounded-3 shadow-sm mb-2"
              style="background-color: #7b8fa1"
              id="detik"
            ></div>
            <p>Detik</p>
          </div>
        </div>
      </section>
      <p class="text-center mt-2 text-white">Hadir</p>
      <div class="text-center my-4">
        <span class="p-3 rounded bg-light text-center">
          {{ summary.sudah_hadir }}
        </span>
      </div>
      <p class="text-center mt-2 text-white">Tidak Hadir</p>
      <div class="text-center my-4">
        <span class="p-3 rounded bg-light text-center">
          {{ summary.tidak_hadir }}
        </span>
      </div>
      <p class="text-center mt-2 text-white">Belum Konfirmasi</p>
      <div class="text-center my-4">
        <span class="p-3 rounded bg-light text-center">
          {{ summary.blm_konfirmasi }}
        </span>
      </div>
    </div>
    <div class="col-9 bg-white">
      <div>
        <h3 class="mt-3">Data Kehadiran Tamu</h3>
      </div>
      <div class="row mt-5 mx-3">
        <div class="col-6">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-secondary btn-sm mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Tamu Undangan
          </button>
        </div>
        <div class="col-6">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search name"
              placeholder="Search"
              v-model="searchInput"
            />
            <button
              class="btn btn-outline-success me-2"
              @click.prevent="searchName()"
            >
              Search
            </button>
            <button class="btn btn-warning" @click.prevent="resetSearch()">
              Reset
            </button>
          </form>
        </div>
      </div>
      <div class="card shadow-lg p-2 m-4">
        <table class="table mt-2">
          <tr>
            <th class="text-center fs-10">Nama</th>
            <th class="text-center fs-10">Alamat</th>
            <th class="text-center fs-10">Hubungan</th>
            <th class="text-center fs-10">Kehadiran</th>
            <th class="text-center fs-10"></th>
          </tr>
          <tr v-for="(data, index) in dataTable" :key="index">
            <td>
              <small class="fs-10">{{ data[1] }}</small>
            </td>
            <td>
              <small class="fs-10">{{ data[2] }}</small>
            </td>
            <td>
              <small class="fs-10">{{ data[3] }}</small>
            </td>
            <td v-if="data[4] === 'SUDAH HADIR'">
              <small class="bg-success p-1 text-white rounded fs-11">{{
                data[4]
              }}</small>
            </td>
            <td v-if="data[4] === 'AKAN HADIR'">
              <small class="bg-warning py-1 px-2 text-white rounded fs-11">{{
                data[4]
              }}</small>
            </td>
            <td v-if="data[4] === 'TIDAK HADIR'">
              <small class="bg-danger p-1 text-white rounded fs-11">{{
                data[4]
              }}</small>
            </td>
            <td v-if="data[4] === 'BELUM KONFIRMASI'">
              <small class="bg-secondary p-1 text-white rounded fs-11">{{
                data[4]
              }}</small>
            </td>
            <td>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <router-link
                  :to="`/to/${data[0]}`"
                  type="button"
                  class="btn btn-primary fs-10"
                  title="lihat undangan"
                  ><i class="bi bi-eye"></i
                ></router-link>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#modalEdit"
                  type="button"
                  class="btn btn-warning fs-10"
                  title="edit data"
                  @click="ubahdata(data[0])"
                >
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  @click="copyId(data[0])"
                  data-bs-toggle="modal"
                  data-bs-target="#modalLink"
                  type="button"
                  class="btn btn-success fs-10"
                  title="bagikan ke whatsapp"
                >
                  <i class="bi bi-whatsapp"></i>
                </button>
              </div>
            </td>
          </tr>
        </table>
        <div class="row">
          <div class="col-12 mx-auto">
            <button
              class="btn btn-outline-success mx-2"
              @click="pagination_decrement()"
            >
              &lt;
            </button>
            <button
              class="btn btn-outline-success mx-2"
              @click="pagination_increment()"
            >
              >
            </button>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Data Tamu</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="col-12">
                <label for="inputname" class="form-label">Nama</label>
                <input
                  type="name"
                  class="form-control"
                  id="text"
                  v-model="tambahTamuForm.nama"
                />
              </div>
              <div class="col-12">
                <label for="inputalamat" class="form-label">Alamat</label>
                <input
                  type="address"
                  class="form-control"
                  id="text"
                  v-model="tambahTamuForm.alamat"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Hubungan</label>
                <input
                  type="text"
                  class="form-control"
                  id="text"
                  v-model="tambahTamuForm.hubungan"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="tambahTamu()"
                data-bs-dismiss="modal"
                :disabled="
                  !tambahTamuForm.nama ||
                  !tambahTamuForm.alamat ||
                  !tambahTamuForm.hubungan
                "
              >
                Tambah Tamu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="modalEdit"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Data Tamu
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="col-12">
                <label for="inputname" class="form-label">Nama</label>
                <input
                  type="name"
                  class="form-control"
                  id="text"
                  v-model="tambahTamuForm.nama"
                />
              </div>
              <div class="col-12">
                <label for="inputalamat" class="form-label">Alamat</label>
                <input
                  type="address"
                  class="form-control"
                  id="text"
                  v-model="tambahTamuForm.alamat"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Hubungan</label>
                <input
                  type="text"
                  class="form-control"
                  id="text"
                  v-model="tambahTamuForm.hubungan"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-warning"
                @click="editTamuAction()"
                data-bs-dismiss="modal"
                :disabled="
                  !tambahTamuForm.nama ||
                  !tambahTamuForm.alamat ||
                  !tambahTamuForm.hubungan
                "
              >
                Edit Tamu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="modalLink"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">LINK</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div class="col-12">
                <label for="inputname" class="form-label">Link</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputname"
                  v-model="sharelink"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

const searchInput = ref("");
const searchName = async () => {
  const res = await axios.get("search?params=" + searchInput.value);
  dataTamu.value = res.data;
  dataTable.value = dataTamu.value.slice(0, 5);
};

const resetSearch = async () => {
  const res = await axios.get("search?params=");
  dataTamu.value = res.data;
  dataTable.value = dataTamu.value.slice(0, 5);
  searchInput.value = "";
};

const tambahTamuForm = ref({
  nama: "",
  alamat: "",
  hubungan: "",
});

const dataTamu = ref();
const dataTable = ref();
const selectedEditId = ref();

const ubahdata = async (id) => {
  selectedEditId.value = id;
  const res = await axios.get("lihat_data_satu_tamu?id=" + id);
  tambahTamuForm.value.nama = res.data.data[0][1];
  tambahTamuForm.value.alamat = res.data.data[0][2];
  tambahTamuForm.value.hubungan = res.data.data[0][3];
};

const sharelink = computed(() => {
  return "https://zen-fia.undangan-online-tegal.my.id/to/" + selectedEditId.value;
});

const copyId = (id) => {
  selectedEditId.value = id;
};

const editTamuAction = async () => {
  const data = tambahTamuForm.value;
  const res = await axios.post(
    "edit_data_tamu?id=" +
      selectedEditId.value +
      "&nama=" +
      data.nama +
      "&alamat=" +
      data.alamat +
      "&jenis_tamu=" +
      data.hubungan
  );
  await getTamu();
  alert("done");
};

const getTamu = async () => {
  const res = await axios.get("lihat_data_tamu");
  dataTamu.value = res.data;
  dataTable.value = dataTamu.value.slice(0, 5);
};

const pagi_num = ref({
  start: 0,
  end: 5,
});

const pagination_increment = () => {
  const data_ = dataTamu.value;
  pagi_num.value.start = pagi_num.value.start + 5;
  pagi_num.value.end = pagi_num.value.end + 5;
  dataTable.value = data_.slice(pagi_num.value.start, pagi_num.value.end);
};

const pagination_decrement = () => {
  const data_ = dataTamu.value;
  pagi_num.value.start = pagi_num.value.start - 5;
  pagi_num.value.end = pagi_num.value.end - 5;
  dataTable.value = data_.slice(pagi_num.value.start, pagi_num.value.end);
};

const tambahTamu = async () => {
  const data = tambahTamuForm.value;
  const res = await axios.post(
    "tambah_tamu?nama=" +
      data.nama +
      "&alamat=" +
      data.alamat +
      "&jenis_tamu=" +
      data.hubungan
  );
  tambahTamuForm.value = {
    nama: "",
    alamat: "",
    hubungan: "",
  };
  alert(res.data);
  await getTamu();
};
const summary = ref({
  blm_konfirmasi: 0,
  akan_hadir: 0,
  tidak_hadir: 0,
  sudah_hadir: 0,
});

const getTracks = async () => {
  const res = await axios.get("getsummary");
  const data = res.data.data;
  summary.value.blm_konfirmasi = data[0];
  summary.value.akan_hadir = data[1];
  summary.value.tidak_hadir = data[2];
  summary.value.sudah_hadir = data[3];
};

onMounted(async () => {
  await getTamu();
  await getTracks();
});

//dari ade
// Set the date we're counting down to
var countDownDate = new Date("Mar 12, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>