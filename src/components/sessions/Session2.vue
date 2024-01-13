<template>
  <main>
    <div class="session">
      <button type="button" class="collapsible" :class="{ active: isOpen }" @click="toggleLessonView()">
        <h3 class="boldedFont">Session 2: Debugging, Data Types & Arrays</h3>
      </button>
      <div class="content" :class="{ contentHidden: !isOpen }">
        <div class="contentContainer">
          <p class="sessionDesc">This session includes debugging with our Rubber Duckies and TWO "SHEro of the Month"s (Joan Clarke) for all cohorts. In addition...</p>
          <p class="boldedFont">Cohorts 1 & 4</p>
          <ul class="regularFont">
            <li>Python data types and arrays, with group exercises & coding practice</li>
          </ul>
          <p class="boldedFont">Cohorts 2 & 3</p>
          <ul class="regularFont">
              <li>JavaScript data types and arrays, with group exercises & coding practice.</li>
          </ul>
          <div><a class="regularFont" href="./pdfs/Session2_Handout_Public.pdf" target="_blank"><i class="far fa-file-pdf"></i> PDF Handout</a></div>
          <div><a class="regularFont" href="https://www.youtube.com/watch?v=Fg82iV-L8ZY" target="_blank"><i class="fab fa-youtube"></i> <b>Grace Hopper</b> Video</a></div>
          <!-- RELEASE AFTER BOTH COHORTS -->
          <div><a class="regularFont" href="./pres/Session2_Python.pdf" target="_blank"><i class="far fa-file-powerpoint"></i> <b>Python</b> presentation</a></div>
          <div><a class="regularFont" href="./pres/Session2_JavaScript.pdf" target="_blank"><i class="far fa-file-powerpoint"></i> <b>JavaScript</b> presentation</a></div>
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
      month: 9 // October - Session 2
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

      if (dateCompare === "9-2023") {
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