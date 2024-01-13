<template>
  <main>
    <div class="sessions" id="lessons">
      <h2 class="boldedFont">Lessons {{ schoolYear }}</h2>
      <p class="regularFont">For the {{ schoolYear }} year, {{ sessionDescription }}</p>
      <session-1></session-1>
      <session-2></session-2>
      <session-3></session-3>
      <session-4></session-4>
      <session-5></session-5>
      <div class="session">
        <button type="button" class="collapsible disabled">
          <h3 class="boldedFont">Session 6: Interactive Code</h3>
        </button>
      </div>
      <div class="session">
        <button type="button" class="collapsible disabled">
          <h3 class="boldedFont">Session 7: Loops & Social and Ethical Issues in CS</h3>
        </button>
      </div>
      <div class="session">
        <button type="button" class="collapsible disabled">
          <h3 class="boldedFont">Session 8: Putting It Together (Loops & Conditionals) & Cyber Security</h3>
        </button>
      </div>
      <div class="session">
        <button type="button" class="collapsible disabled">
          <h3 class="boldedFont">Session 9: Algorithms</h3>
        </button>
      </div>
      <div class="session">
        <h2 class="boldedFont">Continuing Resources</h2>
        <p>Materials coming soon!</p>
      </div>
    </div>
  </main>
</template>

<script>
import cohortData from '../assets/cohortData.js';
import lessonData from '../assets/lessons.js';
import Session1 from '../components/sessions/Session1.vue';
import Session2 from '../components/sessions/Session2.vue';
import Session3 from '../components/sessions/Session3.vue';
import Session4 from '../components/sessions/Session4.vue';
import Session5 from '../components/sessions/Session5.vue';
export default {
  components: { Session1, Session2, Session3, Session4, Session5 },
  data() {
    return {
      schoolYear: cohortData.data().schoolYear,
      sessionDescription: lessonData.data().sessionsDescription,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
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

  &.disabled {
    opacity: 0.4;
  }
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
    display: none;
    background-color: #e2e2e2;
    width: 100%;
}

.content > .contentContainer {
    margin: 1rem;
}

.content div {
    padding: 8px 0px;
}
</style>

  components: { Session2 },