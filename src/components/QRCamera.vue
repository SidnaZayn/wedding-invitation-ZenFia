<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div v-if="!isError">
              <div class="text-center">
                <p>tamu:</p>
                <h4>{{ data_tamu[0][1] }}</h4>
                <h4>{{ data_tamu[0][2] }}</h4>
                <br />
                <p>datang sebagai:</p>
                <h4>{{ data_tamu[0][3] }}</h4>
                <br />
                <p>Silahkan berikan souvenir</p>
              </div>
            </div>
            <div v-else>
              {{ data_tamu }}
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal" class="btn btn-primary" @click="toggleCamera()">
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
          <video v-show="isCameraOpen && !isPhotoTaken" class="camera-video rounded shadow-lg p-3" ref="camera"
            style="width: 384px; height:512px;" autoplay playsinline></video>
          <div class="container" v-show="isPhotoTaken">
            <div class="card shadow p-3">
              <canvas id="photoTaken" class="canvas-photo shadow rounded" ref="canvas" :width="384"
                :height="512"></canvas>
            </div>
          </div>
        </div>
        <button v-if="!isPhotoTaken && isCameraOpen" class="btn btn-success my-3" @click="takePhoto">
          <span>Snap!</span>
        </button>
        <a v-show="isPhotoTaken && isCameraOpen" data-bs-toggle="modal" data-bs-target="#exampleModal"
          class="btn btn-success my-3" role="button" @click="downloadImage">
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
      data_tamu: {},
      isError: true,
    };
  },
  methods: {
    createCameraElement() {
      const constraints = (window.constraints = {
        audio: false,
        video: {
          facingMode: { exact: "environment" }
        },
      });
      const constraints2 = (window.constraints = {
        audio: false,
        video: true
      });

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          this.$refs.camera.srcObject = stream;
        })
        .catch((error) => {
          navigator.mediaDevices
            .getUserMedia(constraints2).then((stream) => {
              this.$refs.camera.srcObject = stream;
            })
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
      this.isError = true;
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
        const res = await axios.post("scanqr", data);
        const res_promise = res.data.data;
        this.data_tamu = res_promise;
        console.log(this.data_tamu);
        this.isError = false;
      } catch (error) {
        const res_promise = error.response.data.data;
        this.data_tamu = res_promise;
        this.isError = true;
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
