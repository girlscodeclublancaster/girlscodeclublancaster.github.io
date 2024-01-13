<template>
  <div class="socialHeader">
    <div class="quickLink">
      <a class="regularFont" href="https://codepen.io/" target="_blank">
        <i class="fab fa-codepen"></i> CodePen.io
      </a>
    </div>
    <div class="navLinks">
      <RouterLink to="/" class="regularFont" :class="{ navUnderline: isHome }">Home</RouterLink>
      <RouterLink to="/schedule" class="regularFont" :class="{ navUnderline: isSchedule }">Schedule</RouterLink>
      <RouterLink to="/lessons" class="regularFont" :class="{ navUnderline: isLessons }">Lessons</RouterLink>
      <a id="attendance" href="./attendance_incentives.png" target="_blank">Attendance Incentives</a>
      <RouterLink to="/shero" class="regularFont" :class="{ navUnderline: isSHEro }">SHEroes</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {}
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    isHome() {
      return this.currentRouteName === "home";
    },
    isSchedule() {
      return this.currentRouteName === "schedule";
    },
    isLessons() {
      return this.currentRouteName === "lessons";
    },
    isSHEro() {
      return this.currentRouteName === "shero";
    }
  }
}
</script>

<style lang="scss" scoped>
/* social media header */
.socialHeader {
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;

  .quickLink {
    margin-left: 1.75rem;
  }

  .navLinks {
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    #attendance {
      @media screen and (max-width: 690px) {
        display: none;
      }
    }

    a {
      color: #f7f2e6;
      text-decoration: none;
      margin-right: 0.75rem;

      border-bottom: 1px solid transparent;
      padding-bottom: 5px;
      transition: 0.2s font-weight, 0.2s border-bottom;

      &:hover {
        /* font-weight: 800; */
        border-bottom: 1px solid #f7f2e6;
        transition: 0.2s font-weight, 0.2s border-bottom;
      }
    }
  }

  .quickLink {
    a {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #f7f2e6;
      border-bottom: 1px solid transparent;
      padding-bottom: 5px;
      text-decoration: none;
      transition: 0.2s font-weight, 0.2s border-bottom;

      &:hover {
        font-weight: 800;
        border-bottom: 1px solid #f7f2e6;
        transition: 0.2s font-weight, 0.2s border-bottom;
      }

      i {
        margin-right: 0.5rem;
      }
    }
  } 
}

@media screen and (max-width: 500px) { 
  .socialHeader {
    flex-direction: column-reverse;
    align-items: flex-end;
    padding-top: 1.5rem;

    .navLinks {
      margin-right: 0 !important;
    }

    .quickLink {
      margin-right: 12px !important;
      margin-top: 1.5rem;
      display: none;
    }
  }
}
</style>
