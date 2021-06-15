<template>
  <transition name="modal">
    <div class="modal-mask">
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
              >7th 선린 해커톤 예선 신청서</TextComponent
            >
            <TextComponent
              mobileFontSize14
              fontSize="18px"
              fontFamily="NanumSquareR"
              >7월 9일 23:59분까지 작성 부탁 드립니다 :)</TextComponent
            >
          </div>

          <div class="modal-body">
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">이름</div>
              <input
                class="modal-body-input"
                type="text"
                placeholder="ex) 김선린"
                v-model="name"
              />
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
              />
            </div>
            <div class="modal-body-input-box">
              <div class="modal-body-input-title">팀 이름</div>
              <input
                class="modal-body-input"
                type="text"
                placeholder="ex) 선린톤화이팅"
                v-model="team"
              />
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
              <div class="modal-body-input-title">포트폴리오</div>
              <label for="file">
                <div class="modal-body-input">{{ protfolioMessage }}</div>
              </label>
              <input
                id="file"
                style="display:none"
                type="file"
                accept="application/pdf"
                @change="setprotfolio($event)"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button" @click="submitapplication">
              제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import api from "@/assets/client";
export default {
  data() {
    return {
      name: "",
      phone: "",
      team: "",
      studentId: "",
      position: "",
      clothSize: "",
      protfolioMessage: "파일 찾아보기...",
      formData: new FormData(),
      portfolio: null
    };
  },
  methods: {
    setportfolios(event) {
      const file = event.target.files[0];
      if (!file || file.size > 1024 * 1024 * 50) {
        alert("파일은 50mb이하여야합니다");
        return;
      }
      const reader = new FileReader();
      console.log(file);
      reader.onload = event => {
        console.log("성공", event.target.result);
        this.protfolioMessage = "제출완료";
      };
      reader.readAsDataURL(file);
      this.portfolio = file;
      // console.log(this.portfolio);
    },

    submitapplication: async function() {
      if (
        this.name != "" &&
        this.studentId != "" &&
        this.team != "" &&
        this.position != "" &&
        this.clothSize != "" &&
        this.portfolio != "" &&
        this.portfolioMessage != "파일 업로드"
      ) {
        this.formData.set("name", this.name);
        this.formData.set("studentId", this.studentId);
        this.formData.set("teamName", this.team);
        this.formData.set("position", this.position);
        this.formData.set("clothSize", this.clothSize);
        this.formData.set("portfolio", this.portfolio);
        this.formData.set("phoneNumber", this.phone);

        // for (var pair of this.formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }
        await api
          .post("/apply", this.formData)
          .then(res => {
            if (res.data.result) {
              alert("성공적으로 제출하였습니다.");
              (this.name = ""),
                (this.phone = ""),
                (this.team = ""),
                (this.studentId = ""),
                (this.position = ""),
                (this.clothSize = ""),
                (this.portfolioMessage = "파일 업로드"),
                (this.formData = new FormData());
            } else {
              alert(res.data.message);
            }
          })
          .catch(e => {
            if (e.response?.data.code == "PARAMETER_NOT_PROVIDED") {
              alert("빈칸을 모두 채워주세요.");
            } else {
              alert("ERROR");
            }
            throw e;
          });
      } else {
        alert("빈칸을 모두 채워주세요.");
      }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
@media screen and (max-width: 768px) {
  .modal-container {
    overflow: hidden;
  }
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
