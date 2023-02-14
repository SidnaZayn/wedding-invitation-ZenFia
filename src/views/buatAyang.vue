<template>
    <div style="background-image: url(buat-ayang/1.jpeg); height:200vw;">
        <div class="container text-center" v-if="isStart == false">
            <div class="row justify-content-md-center" data-aos="slide-down" data-aos-duration="1000">
                <div class="col-md-auto">
                    <div class="bg-success text-white p-5 rounded-3 mt-2">
                        <p class="fs-3">hallow ayangku ariesty rizky aliefia</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center" data-aos="slide-right" data-aos-delay="1000"
                data-aos-duration="2000">
                <div class="col-md-auto">
                    <div class="bg-success text-white p-5 rounded-3 mt-5 text-center">
                        <p class="fs-5">Sebelum Mulai, mari kita main tebak tebakan dulu. <br> kita lihat seberapa kenal
                            ade
                            dengan mas. NGOAHAHAHAHA <br> ((mulai panik kan))</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center" data-aos="slide-left" data-aos-delay="2000"
                data-aos-duration="2000">
                <div class="col-md-auto">
                    <div class="text-white rounded-3 mt-5">
                        <button class="btn btn-warning btn-lg" @click="isStart = true">
                            Mulai !
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-else-if="isStart">
            <div class="text-center mt-2">
                <h1>Jawab dengan benar yaaaaa</h1>
            </div>
            <div class="row justify-content-md-center" data-aos="slide-left" data-aos-delay="500"
                data-aos-duration="1000">
                <div class="col-md-auto">
                    <div class="bg-danger text-center rounded shadow mb-3" style="opacity: 70%;" v-show="isSalah">
                        Salahhhhh
                    </div>
                    <div class="bg-primary text-white text-center p-3 rounded-3 mt-5" v-if="soal1">
                        <p>Tempat Lahir Mas...</p>
                        <div class="row px-4">
                            <button class="btn btn-sm btn-warning my-1" @click="isSalah = true">Kuningan</button>
                            <button class="btn btn-sm btn-warning my-1" @click="isSalah = true">Magelang</button>
                            <button class="btn btn-sm btn-warning my-1"
                                @click="isSalah = false, soal2 = true, soal1 = false">Temanggung</button>
                            <button class="btn btn-sm btn-warning my-1" @click="isSalah = true">Malang</button>
                        </div>
                    </div>
                    <div class="bg-primary text-white text-center p-3 rounded-3 mt-5" data-aos="zoom-in"
                        data-aos-duration="1000" v-if="soal2">
                        <p>Apa Makanan Kesukaan Mas...</p>
                        <div class="row px-4">
                            <button class="btn btn-warning my-1" @click="isSalah = true">Maklor</button>
                            <button class="btn btn-warning my-1"
                                @click="isSalah = false, soal2 = false, soal3 = true">Kikil</button>
                            <button class="btn btn-warning my-1" @click="isSalah = true">Mie Jujugan</button>
                            <button class="btn btn-warning my-1" @click="isSalah = true">McDonald's</button>
                        </div>
                    </div>
                    <div class="bg-primary text-white text-center p-3 rounded-3 mt-5" data-aos="zoom-in"
                        data-aos-duration="1000" v-if="soal3">
                        <p>tampat yang belom pernah kita datengin...</p>
                        <div class="row px=4">
                            <button class="btn btn-warning my-1" @click="isSalah = true">CGV</button>
                            <button class="btn btn-warning my-1" @click="isSalah = false, soal3 = false, soal4 = true">Mie
                                Gacoan</button>
                            <button class="btn btn-warning my-1" @click="isSalah = true">Galdina Adiwerna</button>
                            <button class="btn btn-warning my-1" @click="isSalah = true">Lawson</button>
                        </div>
                    </div>

                    <div class="bg-dark text-white text-center p-3 rounded-3 mt-5" data-aos="slide-down"
                        data-aos-duration="1000" v-if="soal4">
                        <h3>hehehehe betul semua. GOOD JOOOBBB</h3>
                        <p>Nah sekarang, mas ada kejutan lain buat ade. klik tombol dibawah ini yaaaaa</p>
                        <a href="https://youtu.be/yVPWZodKS9s" target="_blank" class="btn btn-primary">Klik</a>
                        <p class="mt-3">maaf yaaa. mungkin valentine mas ngga sekeren orang orang lain. yang mas lakuin juga mungkin ngga semewah orang lain. tapi mas pengen ade tau kalo sayang nya mas ke ade itu tuluussss banget, cuman ade yang bisa bikin mas gini.</p>
                        <p>semoga ade suka. xixixixi. love uuuuu</p>
                        <h2>Happy Valentine My Loveeeee</h2>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';


const isStart = ref(false)
const isSalah = ref(false)
const soal1 = ref(true)
const soal2 = ref(false)
const soal3 = ref(false)
const soal4 = ref(false)
</script>