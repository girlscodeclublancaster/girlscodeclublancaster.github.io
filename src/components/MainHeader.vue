<template>
  <div class="mainHeader">
    <div class="imageContainer">
      <img src="@/assets/rubber_duckies_cropped.jpg" />
    </div>
    <div class="contentContainer">
      <h3 class="regularFont">welcome to</h3>
      <h1 class="boldedFont">{ Girls Code Club }</h1>
      <p class="regularFont headerDesc">Sessions *generally* occur the {{ weekOfMonth }} week of each month. Confirm session dates and times <RouterLink to="/schedule">HERE</RouterLink>!</p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import cohortData from '../assets/cohortData.js';
export default {
  data() {
    return {
      weekOfMonth: cohortData.data().weekOfMonth
    }
  }
}
</script>

<style lang="scss" scoped>
/* main website header */
.mainHeader {
  width: 100%;
  height: 350px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  .imageContainer, .contentContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    color: #f7f2e6;
  }

  .imageContainer {
    justify-content: flex-start;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    h1 {
      margin-top: 0;
      font-size: 45px;
    }

    h3 {
      font-size: 25px;
      margin-bottom: 0;
    }

    .headerDesc {
      font-size: 15px;
      text-align: center;
      padding: 0 2rem;
      max-width: 550px;
    }
  }

  .contentContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;

    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: #f7f2e6;
  }
}

@media screen and (max-width: 500px) {
  .mainHeader h1 {
    font-size: 28px;
  }

  .headerDesc {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
</style>
