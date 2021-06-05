<template>
  <div class="home">
    <section class="home__banner">
      <div class="home__banner__images">
        <img src="@/assets/images/developer.svg" class="home__banner__image__developer" />
        <img class="home__banner__logo" src="@/assets/images/title.svg" alt="제7회 선린톤 로고 이미지" />
        <img src="@/assets/images/designer.svg" class="home__banner__image__designer" />
      </div>
      <img src="@/assets/images/timer.svg" alt="선린톤 타이머 이미지" class="home__banner__timer" />
      <TimerComponent :timeArray="time"></TimerComponent>
      <button class="home__banner__button">예선 지원하러 가기</button>
      <div class="home__banner__bottom"></div>
    </section>
    <article class="home__notice">
      <div style="font-size: 38px">대회안내</div>
      <LineComponent width="32px" height="4px" backgroundColor="#102765" margin="60px 0px"></LineComponent>
      <section>
        <TextComponent fontSize="44px">선린 해커톤?</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">
          선린 해커톤은 제한 시간 안에 소프트웨어를 개발하는 대회입니다
          <br />정해진 주제에 맞춰 하루만에 앱이나 게임을 개발해보세요!
        </TextComponent>
      </section>
      <section>
        <TextComponent fontSize="44px">예선 관련 안내</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">
          예선 통과 인원 : 80명 (게임 앱 분야 10명 / 생활 앱 분야 10명)
          <br />심사 기준 : 포트폴리오 기반 개인 역량, 팀 능력
          <br />결과 발표 : 7/12 (월) 18:00
        </TextComponent>
      </section>
      <section>
        <TextComponent fontSize="44px">본선 관련 안내</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">
          개발 : 7/17(토) 8:00 ~ 7/18(일) 8:00
          <br />발표 및 심사 : 7/18(일) 19:00
          <br />결과 발표 : 당일 발표
        </TextComponent>
      </section>
      <section>
        <TextComponent fontSize="44px">주제 공개 방법</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">
          • 일주일 전 대주제 공개, 공개된 주제 세분화하여 팀별 랜덤으로 선택
          <br />◦ EX) Color -> Red, Yellow, Green . . .
        </TextComponent>
      </section>
      <LineComponent width="32px" height="4px" backgroundColor="#102765" margin="0px 0px 106px 0px"></LineComponent>
      <section>
        <TextComponent fontSize="44px">온라인 진행</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">
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
        <div style="text-align: center">▲ Discord 공식 홈페이지</div>
      </section>
      <section>
        <TextComponent fontSize="44px">문의</TextComponent>
        <TextComponent
          fontSize="28px"
          fontFamily="NanumSquareR"
          margin="36px 0px"
        >선린 해커톤 페이스북 페이지 ( @sunrinhackathon )</TextComponent>
        <!-- 이미지 박스 -->
        <img
          src="@/assets/images/facebook.svg"
          alt="facebook image"
          width="180px"
          height="180px"
          style="width:100%; margin :0 auto"
        />
        <div style="text-align: center">▲ 선린톤 페이스북 페이지</div>
      </section>
      <section>
        <TextComponent fontSize="44px">참가팀 발표</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">예선 이후 공지 예정입니다 :)</TextComponent>
      </section>
      <section>
        <TextComponent fontSize="44px">대회 일정</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">예선 이후 공지 예정입니다 :)</TextComponent>
      </section>
      <section>
        <TextComponent fontSize="44px">포인트 교환소</TextComponent>
        <TextComponent fontSize="28px" fontFamily="NanumSquareR" margin="36px 0px">예선 이후 공지 예정입니다 :)</TextComponent>
      </section>
    </article>
    <footer class="home__footer"></footer>
  </div>
</template>

<script>
import TimerComponent from "@/components/Home/Timer";
export default {
  name: "Home",
  components: { TimerComponent },
  data() {
    return {
      time: [
        { timeName: "days", data: "01" },
        { timeName: "hours", data: "23" },
        { timeName: "min", data: "45" },
        { timeName: "sec", data: "67" }
      ]
    };
  }
};
</script>

<style scoped>
.home__banner__images {
  width: 100%;
  margin: 70px 0px;
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
  margin-top: -100px;
}
.home__banner {
  width: 100%;
  height: calc(100vh + 200px);
  background-color: #113fbd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
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
  height: 88px;
  border-radius: 75px;
  border: 0px;
  box-shadow: #0613aa 10px 10px 3px;
  font-size: 25px;
  margin-top: 80px;
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

@media screen and (max-width: 768px) {
  .home__banner__images {
    margin: 100px 0px 70px 0px;
  }
  .home__banner__timer {
    width: 140px;
    margin-top: -50px;
  }
}
</style>
