<template>
  <main>
    <div class="session">
      <button type="button" class="collapsible" :class="{ active: isOpen }" @click="toggleLessonView()">
        <h3 class="boldedFont">Session 4: Continued Functions & DEIB</h3>
      </button>
      <div class="content" :class="{ contentHidden: !isOpen }">
        <div class="contentContainer">
          <p class="sessionDesc">This session includes continuing to practice functions, DEIB, and a "Choose Your Own SHEro" activity in the Science Factory's Hall of Heroes.</p>
          <div><a class="regularFont" href="./pdfs/Session4_Functions_DEIB.pdf" target="_blank"><i class="far fa-file-pdf"></i> PDF Handout</a></div>
          <div><a class="regularFont" href="./pres/Session4_Python_CalculatorFunctions.pdf" target="_blank"><i class="far fa-file-powerpoint"></i> <b>Python</b> presentation</a></div>
          <div><a class="regularFont" href="./pres/Session4_JavaScriptFunctions.pdf" target="_blank"><i class="far fa-file-powerpoint"></i> <b>JavaScript</b> presentation</a></div>
          <br/>
          <div><a class="regularFont" href="./pres/Session4_PythonMakeup.pdf" target="_blank"><i class="far fa-file-pdf"></i> Miss this session? View the <b>Python</b> makeup assignment!</a></div>
          <div><a class="regularFont" href="./pres/Session4_JavaScriptMakeup.pdf" target="_blank"><i class="far fa-file-pdf"></i> Miss this session? View the <b>JavaScript</b> makeup assignment!</a></div>
          <!-- BONUS MATERIALS - release after the session and point to them in 1 week follow up email -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      beginYear: 2023,
      month: 11 // October - Session 2
    }
  },
  mounted() {
    this.autoOpenLesson();
  },
  methods: {
    toggleLessonView() {
      this.isOpen = !this.isOpen;
    },
    autoOpenLesson() {
      var today = new Date;
      var month = today.getMonth();
      var year = month >= 8 && month <= 11 ? this.beginYear : this.beginYear + 1;
      var dateCompare = month + "-" + year;

      if (dateCompare === "11-2023") {
        this.toggleLessonView();
      }
    }
  }
}
</script>

<style scoped>
.sessions {
  margin: 2rem;
}

.session {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.session h3 {
  /* color: #bba2db; */
  color: #453c6b;
  margin-bottom: 12px;
}

.session .sessionDesc {
  font-style: italic;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 8px;
}

.session p.boldedFont {
  margin-bottom: 8px;
}

.session ul {
  margin-top: 0px;
}

.session .fa-file-pdf, .session .fa-file-powerpoint, .fa-lightbulb {
  margin-right: 0.7rem;
}

.fa-puzzle-piece, .fa-youtube {
  margin-right: 0.4rem;
}

.session .fa-external-link-alt {
  margin-right: 0.4rem;
}

.session p {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.session a {
  text-decoration: none;
  border-bottom: 1px solid #531180;
  margin-bottom: 1rem;
  padding-bottom: 4px;
  color: #531180;
  transition: 0.2s color, 0.2s border-bottom;
}

.session a:hover {
  color: #7265AD;
  border-bottom: 1px solid #7265AD !important;
}

.collapsible {
  background-color: #bba2db;
  color: white;
  cursor: pointer;
  padding: 0px 20px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  margin-top: 1rem;
}

.collapsible > h3 {
  font-size: 18px;
}

.collapsible.active, .collapsible:hover {
  background-color: #555;
}

.collapsible.active > h3, .collapsible:hover > h3 {
  color: white;
}

.content {
  background-color: #e2e2e2;
  width: 100%;
}

.contentHidden {
  display: none;
}

.content > .contentContainer {
  margin: 1rem;
}

.content div {
  padding: 8px 0px;
}
</style>