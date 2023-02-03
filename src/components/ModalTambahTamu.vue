<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Tambah Tamu
  </button>

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
          <h5 class="modal-title" id="exampleModalLabel">Tambah Tamu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="nama" class="form-label">Nama Tamu</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              placeholder="nama tamu..."
              v-model="tamuBaru.nama"
            />
          </div>
          <div class="mb-3">
            <label for="alamat" class="form-label">Alamat</label>
            <input
              type="text"
              class="form-control"
              id="alamat"
              placeholder="alamat tamu..."
              v-model="tamuBaru.alamat"
            />
          </div>
          <div class="mb-3">
            <label for="jenis_tamu" class="form-label">Jenis Tamu</label>
            <select
              id="jenis_tamu"
              class="form-select"
              v-model="tamuBaru.jenis_tamu"
            >
              <option value="Kerabat Ariesty Rizky Aliefia">
                Kerabat Ariesty Rizky Aliefia
              </option>
              <option value="Kerabat Sidna Muhammad Zen">
                Kerabat Sidna Muhammad Zen
              </option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-success"
            @click="tambahTamu()"
            data-bs-dismiss="modal"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";

const emits = defineEmits(["onSave"]);
const tambahTamu = async () => {
  if (
    !tamuBaru.value.alamat &&
    !tamuBaru.value.alamat &&
    !tamuBaru.value.jenis_tamu
  ) {
    alert("data harus lengkap");
  } else {
    const post = await axios.post(
      `tambah_tamu?nama=${tamuBaru.value.nama}&alamat=${tamuBaru.value.alamat}&jenis_tamu=${tamuBaru.value.jenis_tamu}`
    );
    emits("onSave");
  }
};

const tamuBaru = ref({
  nama: "",
  alamat: "",
  jenis_tamu: "",
});
</script>