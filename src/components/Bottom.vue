<template>
  <main>
    <div class="footerContainer">
      <div class="footer">
        <div class="instructors">
          <div>Head Coach: <a href="mailto:emmali.montgomery@gmail.com" target="_blank">Emma Wertz</a></div>
          <div v-for="coach in assistantCoaches">
            Assistant Coach ({{ coach.days }}): {{ coach.name }}
          </div>
          <div style="padding-top: 12px"><a id="attendance" href="https://girlscodeclublancaster.github.io/attendance_incentives.png" target="_blank">2023-2024 Attendance Incentives</a></div>
        </div>
        <div class="contacts">
          <div>GCC Email: <a href="mailto:girlscodeclublancaster@gmail.com" target="_blank">girlscodeclublancaster@gmail.com</a></div>
          <div>LSF Contact: <a href="mailto:abakay@tlsf.org">Amanda Bakay</a></div>
        </div>
      </div>
      <div class="copyright">
        <i class="far fa-copyright"></i>
        2023-2024
        <a href="https://lancastersciencefactory.org/" target="_blank"> The Lancaster Science Factory</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      assistantCoaches: [
        {
          id: 1,
          days: "Sunday",
          name: "Sarah Karpel"
        },
        {
          id: 2,
          days: "Wednesday",
          name: "Lindsay Klatzkin"
        },
        {
          id: 3,
          days: "Thursday",
          name: "Amanda Mooney"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* footer */
.footerContainer {
  background-color: #f7f2e6;
  border-top: 1px solid rgba(137,136,138,0.1);
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.2);
}

@media only screen and (max-width: 700px) {
  .footer {
    flex-direction: column;
  }
  .contacts {
    align-items: flex-start !important;
    padding-left: 2rem !important;
    padding-top: 0 !important;
  }
}

.instructors, .contacts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 0;

  div {
    font-size: 12px;
    margin-bottom: 2px;
  }

  a {
    font-style: italic;
    color: black;
    transition: 0.2s color;
    font-weight: 800;

    &:hover {
      color: white !important;
    }

    &:hover {
      color: #573c7d;
    }
  }
}

.instructors {
  margin-left: 2rem;
  align-items: flex-start;
}

.contacts {
  margin-right: 2rem;
  align-items: flex-end;
}

/* copyright */
.copyright {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 5px 5px 1rem 2rem;
  font-size: 12px;

  i {
    margin-right: 5px;
  }

  a {
    font-weight: 800;
    margin-left: 5px;
    color: black;
    transition: 0.2s color;
    font-style: italic;

    &:hover {
      color: white !important;
    }

    &:visited {
      color: #573c7d;
    }
  }
}
</style>