<template>
  <div>
    <div class="container">
      <div
        class="
          d-flex
          flex-column
          min-vh-100
          justify-content-center
          align-items-center
        "
      >
        <div class="card shadow mx-auto p-4">
          <h2 class="mx-auto">Login</h2>
          <div class="form">
            <div class="my-4">
              <label for="username" class="mb-2">username</label>
              <input
                class="form-control"
                type="text"
                v-model="login.username"
              />
            </div>
            <div class="my-4">
              <label for="password" class="mb-2">password</label>
              <input
                class="form-control"
                type="password"
                v-model="login.password"
              />
            </div>
            <button class="btn btn-success mt-3" @click="loginDashboard()">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const login = ref({
  username: "",
  password: "",
});
const router = useRouter();

const loginDashboard = () => {
  if (login.value.username == "fia") {
    if (login.value.password == "procot321") {
      localStorage.setItem("login", "procot321");
      alert("berhasil masuk");
      router.push({ name: "Dashboard" });
    } else {
      alert("password salah");
    }
  } else {
    alert("username salah");
  }
};

onMounted(() => {
  localStorage.removeItem("login");
});
</script>