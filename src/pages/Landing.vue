<template>
  <div class="home">
    <ModalComponent v-if="showModal" @close="showModal = false"></ModalComponent>
    <section class="home__banner">
      <div class="home__banner__images">
        <img src="@/assets/images/developer.svg" class="home__banner__image__developer" />
        <img class="home__banner__logo" src="@/assets/images/title.svg" alt="제7회 선린톤 로고 이미지" />
        <img src="@/assets/images/designer.svg" class="home__banner__image__designer" />
      </div>
      <div style="margin-top:-50px;"></div>
      <p class="timer__back">Timer</p>
      <img src="@/assets/images/timer.svg" alt="선린톤 타이머 이미지" class="home__banner__timer" />

      <TimerComponent :timeArray="time" v-if="loading == false"></TimerComponent>
      <BeatLoader :loading="loading" :color="color" :size="size" v-else class="loading__timer"></BeatLoader>
      <a class="home__banner__button" href="#result">예선 결과 확인하기</a>
    </section>
    <div class="home__banner__background">
      <div class="home__banner__bottom"></div>
    </div>
    <article class="home__notice">
      <TextComponent fontSize="34px" color="#102765">대회안내</TextComponent>
      <LineComponent width="32px" height="2px" backgroundColor="#102765" margin="60px 0px"></LineComponent>
      <section>
        <TextComponent fontSize="40px" mobileFontSize30>선린 해커톤?</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px" mobileFontSize20>
          선린 해커톤은 제한 시간 안에 소프트웨어를 개발하는 대회입니다
          <br />정해진 주제에 맞춰 하루만에 앱이나 게임을 개발해보세요!
        </TextComponent>
      </section>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>예선 관련 안내</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px" mobileFontSize20>
          예선 통과 인원 : 80명 (게임 앱 분야 10팀 / 생활 앱 분야 10팀)
          <br />심사 기준 : 포트폴리오 기반 개인 역량, 팀 능력
          <br />결과 발표 :
          7/11 (일) 20:00
        </TextComponent>
      </section>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>본선 관련 안내</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px" mobileFontSize20>
          개발 : 7/17(토) 8:00 ~ 7/18(일) 8:00
          <br />발표 및 심사 : 7/18(일) 19:00
          <br />결과 발표 : 당일 발표
        </TextComponent>
      </section>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>주제 공개 방법</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px" mobileFontSize20>
          • 일주일 전 대주제 공개, 공개된 주제 세분화하여 팀별 랜덤으로 선택
          <br />◦ EX) Color -> Red, Yellow, Green . . .
        </TextComponent>
      </section>
      <LineComponent width="32px" height="2px" backgroundColor="#102765" margin="0px 0px 106px 0px"></LineComponent>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>온라인 진행</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 15px"
          mobileFontSize20
        >
          이번 해커톤 역시 COVID-19로 인해 온라인으로 진행하게 되었습니다 :)
          <br />대회 진행 및 운영은 마찬가지로 Discord로 진행할 예정이니
          <br />신청자 분들께서는 디스코드 아이디를 미리 준비해주세요!
        </TextComponent>
        <a href="https://discord.com">
          <img
            src="@/assets/images/discord.svg"
            alt="discord image"
            width="150px"
            height="150px"
            style="width:100%; margin :0 auto"
          />
          <TextComponent margin="-20px 0px 36px 0px">▲ Discord 공식 홈페이지</TextComponent>
        </a>
      </section>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>문의</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 0px"
          mobileFontSize20
        >선린 해커톤 페이스북 페이지 ( @sunrinhackathon )</TextComponent>
        <!-- 이미지 박스 -->
        <a href="http://facebook.com/sunrinhackathon">
          <img
            src="@/assets/images/facebook.svg"
            alt="facebook image"
            width="180px"
            height="160px"
            style="width:100%; margin :0 auto"
          />
          <TextComponent margin="-20px 0px 36px 0px">▲ 선린톤 페이스북 페이지</TextComponent>
        </a>
      </section>
      <section id="result">
        <TextComponent fontSize="36px" mobileFontSize30>참가팀 발표</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 0px"
          mobileFontSize20
          v-if="!showTeams"
        >신청서 심사 중 입니다.</TextComponent>
        <template v-else>
          <div class="group">
            <div class="life list">
              <span class="title">생활</span>
              <span
                v-for="(value, index) in passedTeams.life"
                :key="`${index}_${value}`"
                class="team"
              >{{ value }}</span>
            </div>
            <div class="game list">
              <span class="title">게임</span>
              <span
                v-for="(value, index) in passedTeams.game"
                :key="`${index}_${value}`"
                class="team"
              >{{ value }}</span>
            </div>
          </div>
        </template>
      </section>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>대회 일정</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 0px"
          mobileFontSize20
        >예선 이후 공지 예정입니다 :)</TextComponent>
      </section>
      <section>
        <TextComponent fontSize="36px" mobileFontSize30F>포인트 교환소</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 0px"
          mobileFontSize20
        >대회 시작 이후 공지 예정입니다 :)</TextComponent>
      </section>
    </article>
    <footer class="home__footer">
      <div>
        Copyright © 2021 SUNRINTHON STAFF
        <br />2021 SUNRINTHON WEB_STAFF (
        <a href="https://github.com/hadmarine">이호준</a> /
        <a href="https://github.com/UniTaeMin">염태민</a> /
        <a href="https://github.com/famous0811">유명환</a> /
        <a>김유라</a> )
        <br />CONTACT | facebook.com/sunrinhackathon
      </div>
    </footer>
  </div>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import TimerComponent from "@/components/Home/Timer";
import ModalComponent from "@/components/Home/Modal";
import moment, { duration } from "moment";
import api from "@/api/client";

const settingTimer = async () => {
  return await api
    .post("/admin/time/start/hackathon", {
      value: "Sat July 09 2021 11:59:00 GMT+0900 (Korean Standard Time)"
    })
    .then(res => {
      // alert("test");
    })
    .catch(e => {
      console.error(e);
      throw e;
    });
};
const getTime = async () => {
  return await api
    .get("/time/start/hackathon")
    .then(res => {
      if (res.status === 500) {
        alert(res.message);
      }
      return res.data.data;
    })
    .catch(e => {
      console.error(e);
      throw e;
    });
};

export default {
  name: "Home",
  components: { TimerComponent, ModalComponent, BeatLoader },
  data() {
    return {
      time: null,
      showModal: false,
      endTime: null,
      startTime: new moment(),
      loading: false,
      color: "#ffffff",
      size: "20px",
      passedTeams: {
        life: [],
        game: []
      },
      showTeams: false
    };
  },
  created() {
    this.loading = true;
    this.showTeams = false;
    api
      .get("/teams/passed")
      .then(res => {
        if (res.data.code == "OK") {
          this.passedTeams.life = res.data.data.living;
          this.passedTeams.game = res.data.data.game;
          this.showTeams = true;
        }
      })
      .catch(e => {
        if (e.response?.data.code == "DATA_NULL") {
          //데이터 없음
        }
      });

    getTime()
      .then(res => {
        this.endTime = new moment(res);
        var seconds = Number((this.endTime - this.startTime) / 1000);
        var check_seconds = seconds;
        setInterval(() => {
          var d = Math.floor(seconds / (3600 * 24));
          var h = Math.floor((seconds % (3600 * 24)) / 3600);
          var m = Math.floor((seconds % 3600) / 60);
          var s = Math.floor(seconds % 60);
          this.time =
            seconds <= 0
              ? [{ timeName: "", data: "Time Expired!" }]
              : [
                  {
                    timeName: "days",
                    data: d < 10 ? "0" + d : d
                  },
                  {
                    timeName: "hours",
                    data: h < 10 ? "0" + h : h
                  },
                  {
                    timeName: "min",
                    data: m < 10 ? "0" + m : m
                  },
                  {
                    timeName: "sec",
                    data: s < 10 ? "0" + s : s
                  }
                ];
          if (check_seconds == seconds) {
            this.loading = false;
          }
          seconds -= 1;
        }, 1000);
      })
      .catch(e => {
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.group {
  width: 560px;
  max-width: 80vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 36px;
  font-size: 26px;
}
.list {
  max-width: 240px;
  min-width: 240px;
  height: 100%;
  margin: 0 20px 30px 20px;
  font-family: "NanumSquareB" !important;
}
.life,
.game {
  width: 50%;
  height: 100%;
  border: 1px solid #cccccc;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #cccccc;
  color: white;
  background-color: #001da3;
}
.team {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #cccccc;
  color: #444444;
  font-size: 18px;
}
.desc:first-child:last-child {
  text-align: center;
}
.home__banner__images {
  width: 100%;
  margin: 80px 0px 0px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: fit-content;
}
.home {
  width: 100%;
}
.home__banner__timer {
  width: 200px;
  margin-top: -80px;
}
.home__banner {
  width: 100%;
  height: calc(100vh);
  background-color: #113fbd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.home__banner__background {
  width: 100%;
  height: 250px;
  background-color: #113fbd;
  position: relative;
}
.home__banner__logo {
  color: white;
  font-size: 200px;
  width: 70%;
}
.home__banner__image__developer {
  position: absolute;

  width: 25%;

  transform: rotate(-16deg);
  top: -30%;
  left: 7%;
}
.home__banner__image__designer {
  position: absolute;

  width: 22%;

  transform: rotate(5deg);
  bottom: -40%;
  right: 4%;
}
.home__banner__button {
  color: #102765;
  font-family: "NanumSquareEB";
  width: 263px;
  height: 80px;
  min-height: 80px;
  border-radius: 75px;
  border: 0px;
  box-shadow: #0613aa 10px 10px 3px;
  font-size: 25px;
  background-color: white;
  cursor: pointer;
  z-index: 1;
  margin: 70px auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home__banner__bottom {
  height: 80px;
  background-color: white;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 100% 100% 0px 0px;
}
.home__notice {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.home__notice > section {
  margin-bottom: 80px;
}

.home__footer {
  width: 100%;
  height: 160px;
  background-color: #113fbd;
  color: white;
  padding: 2% 3%;
  font-size: 18px;
  line-height: 1.4;
  font-family: "NanumSquareB" !important;
  display: flex;
  align-items: center;
}
.home__footer a {
  text-decoration: none !important;
  cursor: pointer;
  color: white;
}

.timer__back {
  color: transparent;
  font-family: "KoolBeans";
  font-size: 58px;
  text-shadow: 1px 1px #001da3;
  margin: 5.8px 0px;
}

.loading__timer {
  height: 142px;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1028px) {
  .loading__timer {
    height: 100px;
  }
  .home__banner__button {
    margin: 50px auto 0px auto;
  }
}

@media screen and (max-width: 768px) {
  .home__footer {
    font-size: 12px;
  }
  .loading__timer {
    height: 84px;
  }
  .home__banner__images {
    margin: 0px 0px 80px 0px;
  }
  .home__banner__timer {
    width: 140px;
    margin-top: -53px;
  }
  .home__banner__button {
    width: 240px;
    min-height: 66px;
    height: 66px;
    font-size: 20px;
    margin: 50px auto 0px auto;
  }
  .timer__back {
    font-size: 40px;
    text-shadow: 1px 1px #001da3;
    margin: 0px 0px 0px 0px;
  }
}
a {
  text-decoration: none;
}
</style>
