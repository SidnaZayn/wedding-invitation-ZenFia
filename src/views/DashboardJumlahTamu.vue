<template>
    <div class="row" style="width: 100vw;">
        <div class="col-3 bg-secondary rounded-4 py-3 px-4" style="height: 100vh;">
            <h2 class="cal text-center mt-2 text-white">Sidna & Ariesty</h2>
            <p class="text-center my-0 text-white">Tanggal Pernikahan</p>
            <h3 class="text-center text-white">12/03/2023</h3>
            <section id="countdown" class="text-center mt-4">
                <h4 class="cal text-white" data-aos="flip-down">Menuju Acara</h4>
                <div class="row">
                    <div class="text-center col-3" data-aos="flip-right">
                        <div class="py-2 px-1 rounded-3 shadow-sm mb-2" style="background-color: #7b8fa1" id="hari">
                        </div>
                        <p>Hari</p>
                    </div>
                    <div class="text-center col-3" data-aos="flip-right" data-aos-delay="200">
                        <div class="py-2 px-1 rounded-3 shadow-sm mb-2" style="background-color: #7b8fa1" id="jam">
                        </div>
                        <p>Jam</p>
                    </div>
                    <div class="text-center col-3" data-aos="flip-right" data-aos-delay="300">
                        <div class="py-2 px-1 rounded-3 shadow-sm mb-2" style="background-color: #7b8fa1" id="menit">
                        </div>
                        <p>Menit</p>
                    </div>
                    <div class="text-center col-3" data-aos="flip-right" data-aos-delay="400">
                        <div class="py-2 px-1 rounded-3 shadow-sm mb-2" style="background-color: #7b8fa1" id="detik">
                        </div>
                        <p>Detik</p>
                    </div>
                </div>
            </section>
            <p class="text-center mt-2 text-white">Total Jumlah Tamu</p>
            <div class="text-center my-4">
                <span class="p-3 rounded bg-light text-center">
                    {{ TotaljumlahTamu }}
                </span>
            </div>
        </div>
        <div class="col-9 bg-white">
            <div class="text-center mt-3">
                <h2>Jumlah Tamu yang Akan Hadir</h2>
            </div>
            <div class="card shadow-lg p-2 m-4">
                <div class="row m-3">
                    <div class="col-6"></div>
                    <div class="col-6">
                        <form class="d-flex">
                          <input class="form-control me-2" type="search name" placeholder="Search" v-model="searchInput" />
                          <button class="btn btn-outline-success me-2" @click.prevent="searchName()">
                            Search
                          </button>
                          <button class="btn btn-warning" @click.prevent="resetSearch()">
                            Reset
                          </button>
                        </form>
                      </div>
                </div>
                <table class="table mt-2">
                    <tr>
                        <th class="text-center fs-10">Nama</th>
                        <th class="text-center fs-10">Alamat</th>
                        <th class="text-center fs-10">Jumlah Tamu</th>
                        <th class="text-center fs-10">Ubah Status</th>
                    </tr>
                    <tr v-for="(data, index) in dataTable" :key="index">
                        <td class="text-center fs-10">
                            {{ data[1] }}
                        </td>
                        <td class="text-center fs-10">
                            {{ data[2] }}
                        </td>
                        <td class="text-center fs-10">
                            {{ data[3] }}
                        </td>
                        <td class="text-center">
                            <span v-if="data[4] === 'SUDAH HADIR'">
                                <button class="btn btn-danger" @click="cancelStatus(data[0])">Batalkan Kehadiran</button>
                            </span>
                            <span v-else>
                                <button class="btn btn-success" @click="ubahStatus(data[0])">Sudah Hadir</button>
                            </span>
                        </td>
                    </tr>
                </table>
                <div class="row">
                    <div class="col-12 mx-auto">
                        <button class="btn btn-outline-success mx-2" @click="pagination_decrement()">
                            &lt;
                        </button>
                        <button class="btn btn-outline-success mx-2" @click="pagination_increment()">
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

onMounted(async () => {
    await getJumlahTamu();
});

const TotaljumlahTamu = ref(0);
const jumlahTamu = ref({});
const getJumlahTamu = async () => {
    TotaljumlahTamu.value = 0;
    const res = await axios.get('jumlah_tamu');
    jumlahTamu.value = res.data;
    dataTable.value = jumlahTamu.value.slice(0, 5);
    jumlahTamu.value.forEach(element => {
        TotaljumlahTamu.value += element[3]
    });
};
const dataTable = ref([]);
const pagi_num = ref({
    start: 0,
    end: 5,
});

const ubahStatus = async (id) => {
    const res = await axios.get('ubah_status?id=' + id);
    alert(res.data);
    await getJumlahTamu();
}

const cancelStatus = async (id) => {
    const res = await axios.get('cancel_ubah_status?id=' + id);
    alert(res.data);
    await getJumlahTamu();
}

const searchInput = ref("");

const searchName = async () => {
  const res = await axios.get("search_jumlah?params=" + searchInput.value);
  jumlahTamu.value = res.data;
  dataTable.value = jumlahTamu.value.slice(0, 5);
};

const resetSearch = async () => {
  const res = await axios.get("search_jumlah?params=");
  jumlahTamu.value = res.data;
  dataTable.value = jumlahTamu.value.slice(0, 5);
  searchInput.value = "";
};

const pagination_increment = () => {
    const data_ = jumlahTamu.value;
    pagi_num.value.start = pagi_num.value.start + 5;
    pagi_num.value.end = pagi_num.value.end + 5;
    dataTable.value = data_.slice(pagi_num.value.start, pagi_num.value.end);
};

const pagination_decrement = () => {
    const data_ = jumlahTamu.value;
    pagi_num.value.start = pagi_num.value.start - 5;
    pagi_num.value.end = pagi_num.value.end - 5;
    dataTable.value = data_.slice(pagi_num.value.start, pagi_num.value.end);
};

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