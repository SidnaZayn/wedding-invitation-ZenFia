<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Data tamu</h1>
    </div>
    <div class="row m-3">
      <div class="col-sm-12 col-md-8">
        <input type="text" class="form-control" placeholder="search..." />
      </div>
      <div class="col-sm-4 col-md-4">
        <ModalTambahTamu @on-save="tambahTamu()" />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(data, index) in dataTamu"
        :key="index"
        class="col-md-3 col-sm-6 my-2"
      >
        <div
          class="card p-3 shadow"
          :class="index % 2 == 0 ? 'bg-secondary' : 'bg-light'"
          style="height: 200px"
        >
          <p>
            nama: {{ data[1] }} <br />
            asal: {{ data[2] }}
          </p>
          <p>{{ data[3] }}</p>
          <button class="btn "></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import ModalTambahTamu from "../components/ModalTambahTamu.vue";
import axios from "axios";

const dataTamu = ref();
const getTamu = async () => {
  const res = await axios.get("lihat_data_tamu");
  dataTamu.value = res.data.data;
};
const tambahTamu = async () => {
  await getTamu();
};
onMounted(async () => {
  await getTamu();
});
</script>