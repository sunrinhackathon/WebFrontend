<template>
  <div class="home">
    <section class="home__banner">
      <!-- 배너 이미지랑 타이머 따로 컴퍼넌트화 -->
      <div class="home__banner_image">
        <img src="@/assets/images/developer.svg" />
        <img src="@/assets/images/designer.svg" />
      </div>
      <img class="home__banner__logo" src="@/assets/images/title.svg" alt="제7회 선린톤 로고 이미지" />
      <img src="@/assets/images/timer.svg" alt="선린톤 타이머 이미지" width="150px" />

      <TimerComponent :timeArray="time"></TimerComponent>

      <button class="home__banner__button">예선 지원하러 가기</button>

      <div class="home__banner__bottom"></div>
    </section>
    <article class="home__notice">
      <div style="font-size: 38px">대회안내</div>
      <div style="width: 32px; height: 4px; background-color: #102765; margin:60px 0px "></div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px; text-align: center;">선린 해커톤?</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR'; margin: 36px 0px "
        >
          선린 해커톤은 제한 시간 안에 소프트웨어를 개발하는 대회입니다
          <br />정해진 주제에 맞춰 하루만에 앱이나 게임을 개발해보세요!
        </div>
      </div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">예선 관련 안내</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >
          예선 통과 인원 : 80명 (게임 앱 분야 10명 / 생활 앱 분야 10명)
          <br />심사 기준 : 포트폴리오 기반 개인 역량, 팀 능력
          <br />결과 발표 : 7/12 (월) 18:00
        </div>
      </div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">본선 관련 안내</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >
          개발 : 7/17(토) 8:00 ~ 7/18(일) 8:00
          <br />발표 및 심사 : 7/18(일) 19:00
          <br />결과 발표 : 당일 발표
        </div>
      </div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">주제 공개 방법</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >
          • 일주일 전 대주제 공개, 공개된 주제 세분화하여 팀별 랜덤으로 선택
          <br />◦ EX) Color -> Red, Yellow, Green . . .
        </div>
      </div>
      <div style="width: 32px; height: 4px; background-color: #102765; margin-bottom:106px"></div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">온라인 진행</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >
          이번 해커톤 역시 COVID-19로 인해 온라인으로 진행하게 되었습니다 :(
          <br />대회 진행 및 운영은 마찬가지로 Discord로 진행할 예정이니
          <br />신청자 분들께서는 디스코드 아이디를 미리 준비해주세요!
        </div>

        <!-- 이미지 박스 -->
        <div style="background-color: red; width: 150px; height: 150px; margin: 0 auto;"></div>
        <div style="text-align: center">▲ Discord 공식 홈페이지</div>
      </div>

      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">문의</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >선린 해커톤 페이스북 페이지 ( @sunrinhackathon )</div>
        <!-- 이미지 박스 -->
        <div style="background-color: red; width: 150px; height: 150px; margin: 0 auto;"></div>
        <div style="text-align: center">▲ 선린톤 페이스북 페이지</div>
      </div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">참가팀 발표</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >예선 이후 공지 예정입니다 :)</div>
      </div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">대회 일정</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >예선 이후 공지 예정입니다 :)</div>
      </div>
      <div style="margin-bottom: 80px">
        <div style="font-size: 44px;  text-align: center;">포인트 교환소</div>
        <div
          style="text-align:center; font-size: 28px; font-family:'NanumSquareR';  margin: 36px 0px "
        >예선 이후 공지 예정입니다 :)</div>
      </div>
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
.home {
  width: 100%;
}
.home__banner {
  width: 100%;
  height: calc(100vh + 200px);
  background-color: #113fbd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.home__banner__logo {
  color: white;
  font-size: 200px;
  width: 70%;
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
  margin-top: 90px;
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

.home__footer {
  width: 100%;
  height: 240px;
  background-color: #113fbd;
}
</style>
