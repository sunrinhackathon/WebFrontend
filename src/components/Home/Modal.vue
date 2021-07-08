<template>
  <transition name="modal">
    <div class="modal-mask">
      <BeatLoader :loading="loading" :color="color" :size="size" class="loading"></BeatLoader>

      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <div class="modal-close" @click="$emit('close')">
            <img src="@/assets/images/closeblack.svg" alt="closeblock" />
          </div>
          <div class="modal-header">
            <TextComponent
              mobileFontSize20
              fontSize="30px"
              margin="0px 0px 8px 0px"
            >7th 선린 해커톤 예선 신청서</TextComponent>
            <TextComponent
              mobileFontSize14
              fontSize="18px"
              fontFamily="NanumSquareR"
            >7월 9일 23:59분까지 작성 부탁 드립니다</TextComponent>
            <TextComponent
              mobileFontSize14
              fontSize="18px"
              fontFamily="NanumSquareR"
            >팀당 제출이 아닌 개인별 제출입니다.</TextComponent>
            <TextComponent
              mobileFontSize14
              fontSize="18px"
              fontFamily="NanumSquareR"
            >팀은 4인으로 구성되어야 하며, 미달 시 참가할 수 없습니다.</TextComponent>
          </div>

          <div class="modal-body">
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">이름</div>
              <input class="modal-body-input" type="text" placeholder="ex) 김선린" v-model="name" />
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">학번</div>
              <input
                class="modal-body-input"
                type="text"
                placeholder="ex) 30512"
                v-model="studentId"
              />
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">전화번호</div>
              <input
                class="modal-body-input"
                type="text"
                placeholder="ex) 010-1234-1234"
                v-model="phone"
                @keyup="getPhoneMask(phone)"
              />
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">팀 이름</div>
              <input class="modal-body-input" type="text" placeholder="ex) 선린톤화이팅" v-model="team" />
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">직책</div>
              <select class="modal-body-input" v-model="position">
                <option value="팀장">팀장</option>
                <option value="개발자">개발자</option>
                <option value="디자이너">디자이너</option>
              </select>
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">티셔츠 사이즈</div>
              <select class="modal-body-input" v-model="clothSize">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="3XL">3XL</option>
              </select>
            </div>
              <div class="modal-body-input-box">
              <div class="modal-body-input-title">분야</div>
              <select class="modal-body-input" v-model="field">
                <option value="게임">게임</option>
                <option value="생활">생활</option>
              </select>
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">포트폴리오</div>
              <label for="file">
                <div class="modal-body-input">{{ portfolioMessage }}</div>
              </label>
              <input
                id="file"
                style="display:none"
                type="file"
                accept="application/pdf"
                @change="setportfolios($event)"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="submitapplication">제출하기</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import RingLoader from "vue-spinner/src/RingLoader.vue";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import api from "@/api/client";
export default {
  components: {
    BeatLoader
  },
  data() {
    return {
      name: "",
      phone: "",
      team: "",
      studentId: "",
      position: "팀장",
      clothSize: "L",
      portfolioMessage: "파일 업로드",
      formData: new FormData(),
      color: "#113fbd",
      size: "30px",
      loading: false,
      field:"게임"
    };
  },
  methods: {
    getPhoneMask(val) {
      let res = this.getMask(val);
      this.phone = res;
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            //02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            //02-123-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 3) +
              "-" +
              phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            //02-1234-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 4) +
              "-" +
              phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + "-" + phoneNumber.substr(4);
          } else if (phoneNumber.length == 9) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            //010-1234-5678
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 4) +
              "-" +
              phoneNumber.substr(7);
          }
        }
      }
      return res;
    },
    setportfolios(event) {
      const file = event.target.files[0];
      if (!file || file.size > 1024 * 1024 * 500) {
        alert("파일은 500MB이하여야합니다");
        return;
      }
      const reader = new FileReader();
      reader.onload = event => {
        this.portfolioMessage = "";
        this.portfolioMessage = file.name;
      };
      reader.readAsDataURL(file);
      this.portfolio = file;
    },

    submitapplication: async function() {
      if (
        this.name != "" &&
        this.studentId != "" &&
        this.team != "" &&
        this.position != "" &&
        this.clothSize != "" &&
        this.portfolio != "" &&
        this.portfolioMessage != "파일 업로드" &&
        this.field != ""
      ) {
        this.formData.set("name", this.name);
        this.formData.set("studentId", this.studentId);
        this.formData.set("teamName", this.team);
        this.formData.set("position", this.position);
        this.formData.set("clothSize", this.clothSize);
        this.formData.set("portfolio", this.portfolio);
        this.formData.set("phoneNumber", this.phone);
        this.formData.set("field", this.field);

        var regexp = /^[0-9]*$/;
        if (!regexp.test(this.studentId)) {
          alert("학번에 숫자만 입력하세요");
        } else {
          this.loading = true;
          await api
            .post("/apply", this.formData)
            .then(res => {
              this.loading = false;
              if (res.data.result) {
                alert("성공적으로 제출하였습니다.");
                (this.name = ""),
                  (this.phone = ""),
                  (this.team = ""),
                  (this.studentId = ""),
                  (this.position = ""),
                  (this.clothSize = ""),
                  (this.portfolioMessage = "파일 업로드"),
                  (this.formData = new FormData())
                  this.field= "게임";
                this.$emit("close");
              } else {
                alert(res.data.message);
              }
            })
            .catch(e => {
              this.loading = false;
              if (e.response?.data.code == "PARAMETER_NOT_PROVIDED") {
                alert("빈칸을 모두 채워주세요.");
              } else {
                alert("ERROR");
              }
              throw e;
            });
        }
      } else {
        alert("빈칸을 모두 채워주세요.");
      }
    }
  }
};
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  transition: opacity 0.3s ease;
  animation: load 0.5s;
}
@keyframes load {
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  height: 100vh;
}

.modal-container {
  max-width: 1200px;
  height: 84%;
  width: 90%;
  margin: 0px auto;
  padding: 3% 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  height: fit-content;
}
.modal-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  width: 150px;
  height: 50px;
  background-color: #102765;
  border-radius: 57px;
  color: white;
  font-size: 24px;
  font-family: "NanumSquareEB";
  border: 0px;
  cursor: pointer;
  outline: none;
}
.modal-body-input-box {
  width: 80%;
  max-width: 400px;
  height: fit-content;
  margin: 0 auto 2%;
}
.modal-body-input {
  width: 100%;
  height: 46px;
  outline: none;
  border-radius: 14px;
  border: 2px solid #102765;
  padding: 0px 10px;

  font-size: 16px;
  font-family: "NanumSquareR";

  display: flex;
  align-items: center;
}
.modal-body-input-title {
  font-size: 20px;
  font-family: "NanumSquareB";
  margin-bottom: 8px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media screen and (max-width: 768px) {
  .modal-container {
    padding: 30px 3px;
  }
  .modal-body-input-title {
    font-size: 16px;
    margin-bottom: 6px;
  }
}
</style>
