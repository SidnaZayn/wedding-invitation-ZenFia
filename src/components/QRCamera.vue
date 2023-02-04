<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div v-if="data_tamu[0].length > 1">
              <div class="text-center">
                <p>tamu:</p>
                <h4>{{ data_tamu[0][1] }}</h4>
                <h4>{{ data_tamu[0][2] }}</h4>
                <br>
                <p>datang sebagai:</p>
                <h4>{{ data_tamu[0][3] }}</h4>
                <br>
                <p>Silahkan berikan souvenir</p>
              </div>
            </div>
            <div v-else>
              {{ data_tamu }}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              @click="toggleCamera()"
            >
              scan lagi
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="camera">
      <div class="wrapper">
        <button class="btn btn-success my-3" @click="toggleCamera()">
          <span v-if="!isCameraOpen">Open Camera</span>
          <span v-else>Close Camera</span>
        </button>
        <div class="video-container">
          <video
            v-show="isCameraOpen && !isPhotoTaken"
            class="camera-video rounded shadow-lg p-3"
            ref="camera"
            :width="450"
            :height="337"
            autoplay
            playsinline
          ></video>
          <div class="container" v-show="isPhotoTaken">
            <div class="card shadow p-3">
              <canvas
                id="photoTaken"
                class="canvas-photo shadow rounded"
                ref="canvas"
                :width="450"
                :height="337"
              ></canvas>
            </div>
          </div>
        </div>
        <button
          v-if="!isPhotoTaken && isCameraOpen"
          class="btn btn-success my-3"
          @click="takePhoto"
        >
          <span>Snap!</span>
        </button>
        <a
          v-show="isPhotoTaken && isCameraOpen"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="btn btn-success my-3"
          role="button"
          @click="downloadImage"
        >
          deteksi QR Code
        </a>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "Camera",
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      base_url: "http://127.0.0.1:8008/api/1.0/",
      data_tamu: {},
    };
  },
  methods: {
    createCameraElement() {
      const constraints = (window.constraints = {
        audio: false,
        video: true,
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          alert(
            error,
            "May the browser didn't support or there is some errors."
          );
        });
    },
    stopCameraStream() {
      const tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
      console.log("CameraClosed");
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.stopCameraStream();
        console.log("closed");
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
        console.log("open");
      }
    },
    takePhoto() {
      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext("2d");
      const photoFromVideo = this.$refs.camera;

      context.drawImage(photoFromVideo, 0, 0, 450, 337);
    },
    async downloadImage() {
      const canvas = document
        .getElementById("photoTaken")
        .toDataURL("image/jpeg")
        .replace("data:image/jpeg;base64,", "");

      const data = {
        base64: canvas,
        time: Date.now(),
      };
      try {
        const res = await axios.post(this.base_url + "readqr", data);
        const res_promise = res.data.data;
        this.data_tamu = res_promise;
      } catch (error) {
        const res_promise = error.response.data.data;
        this.data_tamu = res_promise;
      }
    },
  },
};
</script>
  
  <style>
.camera {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 90%;
  background-color: white;
  border: solid 3px rgb(25, 135, 84);
}

.video-container {
  display: flex;
  flex-direction: column;
}
</style>
  