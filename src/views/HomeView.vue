<template>
  <div class="app">
    <div v-if="isOpen == true">
      <section id="music">
        <div v-if="myaudio">
          <audio loop autoplay>
            <source src="/songs.mp3" />
          </audio>
        </div>
      </section>
      <section id="home">
        <div class="container containers mx-auto abs">
          <div class="text-center">
            <div data-aos="fade-down" data-aos-duration="1000">
              <div class="p-4 rounded-3 mt-2 mx-3 shadow" style="background-color: #f8f8f8d7">
                <h5 class="card-title cal fs-2">The Wedding of</h5>
                <h1 class="font-2">Sidna & Ariesty</h1>
                <small class="card-text">Kepada Bapak/Ibu/Saudara/i
                  <span style="text-transform: uppercase; font-weight: bold">{{
                    form.nama
                  }}</span>
                  di tempat</small>
                <p class="card-text">
                  Izinkan kami mengundang Anda dalam acara kami
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="/we.jpg" class="card-img img1" />
        </div>
      </section>
      <section id="dalil">
        <div class="text-center my-5 dalil-container">
          <div class="img">
            <img data-aos="zoom-in" data-aos-delay="300" src="/flower-1.png" alt="flower" class="abs img3" />
          </div>
          <div class="img">
            <img data-aos="zoom-in" src="/flower-1.png" alt="flower" class="abs img4" />
          </div>
          <div class="p-4 rounded-3 mx-3 shadow-sm" style="background-color: #f8f8f899">
            <h2 class="card-title font-2" data-aos="flip-right">Ar-Rum : 21</h2>
            <p class="mt-3 arabic" data-aos="flip-right">
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
              لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
              وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
            <p data-aos="flip-right">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir"
            </p>
          </div>
        </div>
      </section>
      <section id="we">
        <div class="container">
          <div class="card mb-3 mx-5" data-aos="flip-right" data-aos-duration="1500">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="/sidna.jpg" class="img-fluid rounded" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body text-center p-0 mt-4 mb-2">
                  <p>The Groom</p>
                  <h1 class="card-title cal">Sidna Muhammad Zen</h1>
                  <small>Putra Kedua Dari</small>
                  <h5 class="card-text font-2">
                    Bpk. Akhmad Faozi & Ibu. Heriyanti
                  </h5>
                  <p class="card-text">
                    Jl. Mawardi RT.02, RW.01 desa Adiwerna, Kec.
                    Adiwerna,Kab.Tegal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 mx-5" data-aos="flip-right" data-aos-duration="1500">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body text-center p-0 mt-4 mb-2">
                  <p>The Bride</p>
                  <h1 class="card-title cal">Ariesty Rizky Aliefia</h1>
                  <small>Putri Ketiga dari </small>
                  <h5 class="card-text font-2">
                    Bpk. Imam Santoso<span style="font-size: small">(alm)</span>
                    & Ibu. Widiyanti
                  </h5>
                  <p class="card-text">
                    Jl.Sawo Gang 1 Rt/RW 04/02 Kel.Procot Kec.Slawi Kab.Tegal
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="/234.jpeg" class="img-fluid rounded" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="schedule">
        <div class="text-center">
          <div class="img">
            <img data-aos="zoom-in" data-aos-delay="300" src="/flower-3-copy.png" alt="flower" class="abs img7" />
            <img data-aos="zoom-in" data-aos-delay="300" src="/flower-3.png" alt="flower" class="abs img6" />
          </div>
          <div class="p-4 rounded-3 shadow-sm mt-2 mx-3" style="background-color: #f8f8f899">
            <div>
              <h3 class="mt-3 mb-0 cal" data-aos="fade-right">Akad</h3>
              <div>
                <small class="m-0" data-aos="flip-left">
                  <i class="bi bi-calendar4-event"></i> Minggu, 12 Maret 2023
                </small>
              </div>
              <div>
                <small class="m-0" data-aos="flip-left">
                  <i class="bi bi-clock"></i> 08.00 WIB
                </small>
              </div>
              <div>
                <small class="m-0" data-aos="flip-left">
                  <i class="bi bi-geo-alt"></i>Kediaman mempelai wanita
                </small>
              </div>
            </div>
            <div class="mt-5">
              <p class="" data-aos="fade-right">
                Turut mengundang Bapak/Ibu/Saudara/i
                <strong style="text-transform: uppercase">{{ form.nama }}</strong>
                pada acara :
              </p>
              <h1 class="cal mt-3 mb-1" data-aos="fade-right">Resepsi</h1>
              <p class="m-0" data-aos="flip-left">
                <i class="bi bi-calendar4-event"></i> Minggu, 12 Maret 2023
              </p>
              <p class="m-0" data-aos="flip-left">
                <i class="bi bi-clock"></i> 11.00 - 14.00 WIB
              </p>
              <p class="m-0" data-aos="flip-left">
                <i class="bi bi-geo-alt"></i>Jl. Jl. Sawo gang 1 RT.04/RW.02,
                Kel. Procot, Kec. Slawi, Kab. Tegal
              </p>
              <a class="btn btn-secondary mt-3" href="https://goo.gl/maps/X66SRLbKLTVc3bQx5" target="_blank">
                <i class="bi bi-geo-fill"></i> lihat lokasi di maps
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="my-5 dalil-container">
          <div class="img">
            <img data-aos="zoom-in" data-aos-delay="300" src="/flower-1.png" alt="flower" class="abs img3" />
          </div>
          <div class="img">
            <img data-aos="zoom-in" src="/flower-1.png" alt="flower" class="abs img4" />
          </div>
          <div data-aos="flip-left" class="p-4 rounded-3 mx-3 shadow-sm" style="background-color: #f8f8f899">
            <h2 class="card-title font-2 text-center" data-aos="flip-right">Kirim Kartu Ucapan</h2>
            <span data-aos="flip-right">
              <div class="mb-3">
                <label for="text" class="form-label">Name</label>
                <input type="text" v-model="form.nama" class="form-control" id="text">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Asal</label>
                <input type="text" v-model="form.asal" class="form-control" id="text">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Pesan</label>
                <textarea class="form-control" rows="3" v-model="form.pesan"></textarea>
              </div>
            </span>
          </div>
          <div class="text-center m-4">
            <button @click="submitUcapan()" class="btn btn-outline-secondary">Kirim</button>
          </div>
        </div>
        <div class="p-2 card rounded-3 mx-2 shadow-sm">
          <div class="text-center">
            <p class="fs-4 m-0 text-center cal">Selayang Pandang</p>
            <span class="px-2">
              <hr class="hr-2" />
            </span>
          </div>
          <div class="p-2">
            <marquee scrollmount="1" direction="up" style="max-height: 20rem;">
              <div class="p-3 mb-4 rounded-3 shadow-sm" v-for="ucapan in ucapans" :key="ucapan.id" style="background-color: #f8f8f899">
                <p class="my-1 fs-2 font-2">{{ ucapan[1] }} :</p>
                <small class="my-1">{{ ucapan[3] }}</small>
                <p class="my-1 fs-6 font-2">-{{ ucapan[2] }}-</p>
              </div>
            </marquee>
          </div>
        </div>
      </section>
      <section id="presensi">
        <!-- Button trigger modal -->
        <div class="text-center m-4">
          <button type="button" data-aos="zoom-in" class="btn btn-outline-secondary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <i class="bi bi-file-text"></i> <br />
            Konfirmasi Kehadiran
          </button>
        </div>
        <section id="countdown" class="text-center">
          <div class="p-4 rounded-3 shadow-sm m-3 text-center" style="background-color: #f8f8f899">
            <h1 class="cal" data-aos="flip-down">Menuju Acara</h1>
            <span class="p-4">
              <hr class="hr-1 mb-4" data-aos="zoom-in" />
            </span>
            <div class="row">
              <div class="col-3" data-aos="flip-right">
                <div class="p-3 rounded-3 shadow-sm mb-2" style="background-color: #fce592">
                  <h1>{{ menuju_halal.days }}</h1>
                </div>
                <h5>Hari</h5>
              </div>
              <div class="col-3" data-aos="flip-right" data-aos-delay="200">
                <div class="p-3 rounded-3 shadow-sm mb-2" style="background-color: #fce592">
                  <h1>{{ menuju_halal.hours }}</h1>
                </div>
                <h5>Jam</h5>
              </div>
              <div class="col-3" data-aos="flip-right" data-aos-delay="300">
                <div class="p-3 rounded-3 shadow-sm mb-2" style="background-color: #fce592">
                  <h1>{{ menuju_halal.minutes }}</h1>
                </div>
                <h5>Menit</h5>
              </div>
              <div class="col-3" data-aos="flip-right" data-aos-delay="400">
                <div class="p-3 rounded-3 shadow-sm mb-2" style="background-color: #fce592">
                  <h1>{{ menuju_halal.seconds }}</h1>
                </div>
                <h5>Detik</h5>
              </div>
            </div>
          </div>
        </section>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  apakah anda akan hadir?
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-2">
                <div class="text-center m-3">
                  <div v-if="form.isHadir === 'AKAN HADIR'">
                    <div class="text-center" id="qrcode-download">
                      <h5>
                        Terima Kasih {{ jumlahTamu.nama }} Ditunggu Kehadirannya.
                      </h5>
                      <img :src="qrcode + jumlahTamu.nama + ' | ' + jumlahTamu.asal" alt="qrnama" class="my-3" />
                      <br />
                      <small>
                        Simpan & tunjukan QRCode ini ketika anda akan check-in ke acara kami, untuk Konfirmasi kehadiran
                      </small>
                      <br />
                      <button class="btn btn-secondary mt-2" data-bs-dismiss="modal">
                        Okeyyy
                      </button>
                    </div>
                  </div>
                  <div v-if="form.isHadir === 'TIDAK HADIR'">
                    <h3>Terimakasih sudah Konfirmasi</h3>
                    <p>
                      Mohon do'a restu nya yaaa
                    </p>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">
                      Okeyyy
                    </button>
                  </div>
                  <div v-if="!form.isHadir">
                    <form>
                      <div class="mb-2">
                        <div class="row">
                          <div class="col-6">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control" name="nama" v-model="jumlahTamu.nama">
                          </div>
                          <div class="col-6">
                            <label for="asal">Asal</label>
                            <input type="text" class="form-control" name="asal" v-model="jumlahTamu.asal">
                          </div>
                        </div>
                        <div class="row mb-2">
                          <div class="col-12">
                            <label for="jumlah_tamu">Jumlah Tamu</label>
                            <input type="number" class="form-control" name="jumlah_tamu" v-model="jumlahTamu.jumlah_tamu">
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-2">
                        <button type="button" @click.prevent="kehadiran('TIDAK HADIR')"
                          class="btn btn btn-outline-danger me-2">
                          Saya Tidak Hadir
                        </button>
                        <button type="submit" @click.prevent="kehadiran('AKAN HADIR'), submitJumlahTamu()"
                          class="btn btn btn-outline-success">
                          Saya Hadir
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="amplopDigital">
        <div class="img text-center p-4" style="background: url(/bg-flower.png); background-size: 50%">
          <img data-aos="zoom-in" data-aos-duration="200" src="/123.jpg" class="card-img shadow img2" />
        </div>
        <div class="text-center">
          <div class="p-4 rounded-3 mt-2 mx-3 shadow-sm" data-aos="flip-down" style="background-color: #f8f8f899">
            <h2 class="card-title cal">Amplop Digital</h2>
            <small class="card-text mt-4">Doa restu anda merupakan karunia yang sangat berarti bagi kami
              dan jika memberi adalah ungkapan tanda terima kasih anda, anda
              dapat memberi kado secara cashless</small> <br>
            <button class="btn btn-sm btn-outline-success mt-4" @click="lihatAmplop()">Lihat Amplop Digital</button>
          </div>
          <div data-aos="flip-right" data-aos-duration="500" class="row mt-2 p-3" v-show="isAmplopOpen">
            <div class="col">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h5 class="card-title cal">Via Bank</h5>
                  <img src="/mandiri.jpg" class="card-img-top" alt="..." />
                  <div class="input-group">
                    <input value="1390026051932" type="text" class="form-control" style="outline: none; border:none"
                      id="myInput" disabled>
                    <span style="cursor:pointer; outline: none; border:none;" class="input-group-text"
                      @click="myFunction('myInput')"><i class="bi bi-clipboard"></i></span>
                  </div>
                  <p class="card-text">
                    Ariesty Rizky Aliefia (Mandiri)
                  </p>
                  <img src="/bri.jpg" class="card-img-top" alt="..." />
                  <div class="input-group">
                    <input value="0545 01016247509" type="text" class="form-control" style="outline: none; border:none"
                      id="myInput1" disabled>
                    <span style="cursor:pointer; outline: none; border:none;" class="input-group-text"
                      @click="myFunction('myInput1')"><i class="bi bi-clipboard"></i></span>
                  </div>
                  <p class="card-text">
                    Sidna Muhammad Zen (BRI)
                  </p>
                </div>
              </div>
            </div>
            <div class="col" data-aos="flip-right" data-aos-delay="300">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h5 class="card-title cal">Via Dompet Digital</h5>
                  <img src="/gopay.jpg" class="card-img-top" alt="..." />
                  <div class="input-group">
                    <input value="087725672057" type="text" class="form-control" style="outline: none; border:none"
                      id="myInput2" disabled>
                    <span style="cursor:pointer; outline: none; border:none;" class="input-group-text"
                      @click="myFunction('myInput2')"><i class="bi bi-clipboard"></i></span>
                  </div>
                  <p>Ariesty Rizky Aliefia
                  </p>
                  <img src="/ovo.jpg" class="card-img-top" alt="..." />
                  <div class="input-group">
                    <input value="081226158294" type="text" class="form-control" style="outline: none; border:none"
                      id="myInput3" disabled>
                    <span style="cursor:pointer; outline: none; border:none;" class="input-group-text"
                      @click="myFunction('myInput3')"><i class="bi bi-clipboard"></i></span>
                  </div>
                  <p class="card-text">
                    Sidna Muhammad Zen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-show="isOpen" id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"
      data-bs-interval="1500">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/kita.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/kita1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/kita2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/kita3.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/kita4.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
    <div v-if="isOpen == true">
      <section id="Story">
        <div class="text-center">
          <div class="img">
            <img data-aos="zoom-in" data-aos-delay="300" src="/flower-2.png" alt="flower" class="abs img6" />
            <img data-aos="zoom-in" data-aos-delay="300" src="/flower-2-copy.png" alt="flower" class="abs img7" />
          </div>
          <div class="p-4 rounded-3 m-4 shadow-sm" style="background-color: #f8f8f899">
            <h1 data-aos="fade-down" class="card-title cal">Our Story</h1>
            <hr class="hr-1" />
            <div data-aos="fade-right">
              <h3 class="mt-5 mb-0 cal">First Impresion</h3>
              <p class="m-0">22-02-22</p>
              <p class="card-text">
                Kisah ini berawal dari pertemuan kami sebagai kawan kerja di
                sebuah restoran kecil di jantung Kab. Tegal. Canda, tawa,
                berbagi kisah menjadi pendekat kami diawal perjumpaan.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 class="mt-5 mb-0 cal">Engagement</h3>
              <p class="m-0">11-12-22</p>
              <p class="card-text">
                Perkenalan kami membawa pada keseriusan hubungan hingga kami
                sepakat untuk melangsungkan acara Khitbah pada Minggu, 12
                Desember 2022
              </p>
            </div>
            <div data-aos="fade-right">
              <h3 class="mt-5 mb-0 cal">Finally</h3>
              <p class="m-0">12-03-23</p>
              <p class="card-text">
                12 Maret 2023, akan menjadi sejarah dalam kehidupan kami berdua
                sebagai titik dimulainya kehidupan baru. Doakan kami agar dapat
                mengarungi bahtera rumah tangga sampai maut memisahkan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="img p-3 text-center" data-aos="zoom-in">
          <img src="/akhir.jpg" class="card-img img5 shadow" />
        </div>
        <div class="text-center mt-2 mb-4 mx-3" data-aos="fade-up" style="height: 7vh">
          <p class="card-text">
            Kesan yang mendalam akan terukir dihati kami, serta diiringi ucapan
            terima kasih yang tulus, kepada Bapak/Ibu/Saudara/i berkenan hadir
            untuk memberikan Doa Restu
          </p>
          <hr class="hr-2" />
          <h1 class="cal">Terima Kasih</h1>
        </div>
        <div class="img text-center mt-5">
          <img src="/flower-4.png" class="card-img img8 mt-3" />
        </div>

        <!-- watermark -->
        <div class="row mb-3" data-aos="fade-up" data-aos-delay="200">
          <div class="col-12 bg-success">
            <div class="p-3 text-center text-light">
              Online Invitation by
              <a href="https://www.instagram.com/dezayn.studio/" target="_blank"
                style="color: white; text-decoration: none">@dezayn.studio</a>
            </div>
          </div>
        </div>
      </section>
      <span @click="music()" class="float ms-3">
        <button class="btn btn-secondary shadow" style="border-radius: 50%">
          <i class="bi bi-music-note"></i>
        </button>
      </span>
    </div>
    <div v-if="isOpen == false">
      <section id="to">
        <div data-aos="zoom-in" class="p-4 rounded-3 shadow-sm m-3 text-center" style="background-color: #f8f8f899">
          <h1 class="font-2 mb-5" style="color: #65741f">Wedding Invitation</h1>
          <div class="img">
            <img data-aos="zoom-in" data-aos-delay="300" src="/depan.png" alt="logo" class="img-to" />
          </div>
          <h5 data-aos="zoom-in" data-aos-delay="500" style="color: #1b1b1b" class="mt-5">
            <i>Dear,</i>
          </h5>
          <h3 style="text-transform: uppercase" data-aos="zoom-in" data-aos-delay="600">
            {{ form.nama }}
          </h3>
          <button @click="openInvite()" class="btn btn-outline-secondary mt-4" data-aos="zoom-in" data-aos-delay="700">
            Buka Undangan
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
let i = reactive(0);
onMounted(async () => {
  const getTamu = await axios.get("lihat_data_satu_tamu?id=" + id);
  await ambilUcapan();
  const tamu = getTamu.data[0];
  form.value.nama = tamu[1];
  form.value.asal = tamu[2];
  form.value.sebagai = tamu[3];
});

const ucapans = ref([]);
// const ucapan_ = ref([]);
const ambilUcapan = async () => {
  const lihatUcapan = await axios.get("ucapan");
  ucapans.value = lihatUcapan.data;
};

const jumlahTamu = ref({
  nama: "",
  asal: "",
  jumlah_tamu: 0
});

const submitJumlahTamu = async () => {
  const data = jumlahTamu.value
  const res = await axios.post('jumlah_tamu?nama=' + data.nama + '&asal=' + data.asal + "&jumlah_tamu=" + data.jumlah_tamu);
  alert("Terima Kasih Sudah Menginformasikan Jumlah Tamu.")
};

//rsvp
let form = ref({
  nama: "",
  asal: "",
  sebagai: "",
  isHadir: "",
  pesan: "",
});

const submitUcapan = async () => {
  const data = form.value
  const res = await axios.post('ucapan?nama=' + data.nama + '&asal=' + data.asal + '&pesan=' + data.pesan);
  form.value.pesan = "";
  alert("Terima Kasih Sudah Memberikan Pesan.")
};

const kehadiran = async (value) => {
  const getTamu = await axios.post(
    "ubah_kehadiran?id=" + id + "&kehadiran=" + value
  );
  form.value.isHadir = value;
};
const isAmplopOpen = ref(false);
const lihatAmplop = () => {
  isAmplopOpen.value = !isAmplopOpen.value;
}
function myFunction(text) {
  let textToCopy = document.getElementById(text).value;
  // text area method
  let textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  return new Promise((res, rej) => {
    document.execCommand("copy") ? res() : rej();
    textArea.remove();
  });
};

//qrcode
let qrcode = ref(
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
);
const spare = ref(" | ");

//awalan
let isOpen = ref(false);
const openInvite = () => {
  isOpen.value = true;
};

//audio
let myaudio = reactive(true);
function music() {
  myaudio = !myaudio;
}

//countdown
let menuju_halal = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
// Set the date we're counting down to
const countDownDate = new Date("Mar 12, 2023 09:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  menuju_halal.seconds = seconds;
  menuju_halal.minutes = minutes;
  menuju_halal.hours = hours;
  menuju_halal.days = days;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<h1>Sudah Halal</h1>";
  }
}, 1000);
</script>