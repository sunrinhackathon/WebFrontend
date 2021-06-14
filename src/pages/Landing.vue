<template>
  <div class="home">
    <ModalComponent v-if="showModal" @close="showModal = false"></ModalComponent>
    <section class="home__banner">
      <div class="home__banner__images">
        <img src="@/assets/images/developer.svg" class="home__banner__image__developer" />
        <img class="home__banner__logo" src="@/assets/images/title.svg" alt="제7회 선린톤 로고 이미지" />
        <img src="@/assets/images/designer.svg" class="home__banner__image__designer" />
      </div>
      <p class="timer__back">Timer</p>
      <img src="@/assets/images/timer.svg" alt="선린톤 타이머 이미지" class="home__banner__timer" />
      <TimerComponent :timeArray="time"></TimerComponent>
      <button class="home__banner__button" @click="showModal = true">예선 지원하러 가기</button>
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
          예선 통과 인원 : 80명 (게임 앱 분야 10명 / 생활 앱 분야 10명)
          <br />심사 기준 : 포트폴리오 기반 개인 역량, 팀 능력
          <br />결과 발표 :
          7/12 (월) 18:00
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
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px" mobileFontSize20>
          이번 해커톤 역시 COVID-19로 인해 온라인으로 진행하게 되었습니다 :(
          <br />대회 진행 및 운영은 마찬가지로 Discord로 진행할 예정이니
          <br />신청자 분들께서는 디스코드 아이디를 미리 준비해주세요!
        </TextComponent>
        <img
          src="@/assets/images/discord.svg"
          alt="discord image"
          width="150px"
          height="150px"
          style="width:100%; margin :0 auto"
        />
        <TextComponent margin="-20px 0px 36px 0px">▲ Discord 공식 홈페이지</TextComponent>
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
      <section>
        <TextComponent fontSize="36px" mobileFontSize30>참가팀 발표</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 0px"
          mobileFontSize20
        >예선 이후 공지 예정입니다 :)</TextComponent>
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
        >예선 이후 공지 예정입니다 :)</TextComponent>
      </section>
    </article>
    <footer class="home__footer"></footer>
  </div>
</template>

<script>
import TimerComponent from "@/components/Home/Timer";
import ModalComponent from "@/components/Home/Modal";
import moment from "moment";
import api from "@/assets/client";

const settingTimer = async () => {
  return await api
    .post("/admin/time/start/hackathon", {
      value: "Sat Jun 05 2021 21:09:17 GMT+0900 (Korean Standard Time)"
    })
    .then(res => {
      console.log(res);
      alert("test");
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
  components: { TimerComponent, ModalComponent },
  data() {
    return {
      time: null,
      showModal: false,
      endTime: new moment("2021-7-9 1:58:00"),
      startTime: new moment()
    };
  },
  created() {
    // settingTimer();
    getTime().then(res => {
      console.log(res);
      this.endTime = new moment(res);
      var remaintimer = this.endTime - this.startTime;
      setInterval(() => {
        var timer = new moment(remaintimer);
        this.time = [
          {
            timeName: "days",
            data: timer.date() < 10 ? "0" + timer.date() : timer.date()
          },
          {
            timeName: "hours",
            data: timer.hour() < 10 ? "0" + timer.hour() : timer.hour()
          },
          {
            timeName: "min",
            data: timer.minute() < 10 ? "0" + timer.minute() : timer.minute()
          },
          {
            timeName: "sec",
            data: timer.second() < 10 ? "0" + timer.second() : timer.second()
          }
        ];
        remaintimer -= 1000;
      }, 1000);
    });
  }
};
</script>

<style scoped>
.home__banner__images {
  width: 100%;
  margin: 40px 0px 0px 0px;
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
  top: -20%;
  left: 7%;
}
.home__banner__image__designer {
  position: absolute;

  width: 22%;

  transform: rotate(5deg);
  bottom: -34%;
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
  /* margin-top: 80px; */
  background-color: white;
  cursor: pointer;
  z-index: 1;
  margin: 70px auto 0px auto;
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
  height: 240px;
  background-color: #113fbd;
}

.timer__back {
  color: transparent;
  font-family: "KoolBeans";
  font-size: 58px;
  text-shadow: 1px 1px #001da3;
  margin: 5.8px 0px;
}

@media screen and (max-width: 768px) {
  .home__banner__images {
    margin: 0px 0px 80px 0px;
  }
  .home__banner__timer {
    width: 140px;
    margin-top: -53px;
  }
  .home__banner__button {
    width: 240px;
    height: 66px;
    font-size: 20px;
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
