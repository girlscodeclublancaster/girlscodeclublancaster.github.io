<template>
  <main>
    <div class="schedule" id="schedule">
      <h2>Schedule {{ schoolYear }}</h2>
      <div class="scheduleFilters">
        <div>Filter by Cohort:</div>
        <div class="filterGroup">
          <div class="filterButton" :class="{ active: selectedCohort === 0 }" @click="filterCohort(0)">All</div>
          <div
            v-for="(cohort, index) of numCohorts"
            class="filterButton"
            :class="{ active: selectedCohort === (index + 1) }"
            @click="filterCohort(index + 1)"
          >
            Cohort {{ index + 1 }}
          </div>
        </div>
      </div>
      <p class="disclaimer">** Not all session dates occur during the {{ weekOfMonth }} week of the month! Please pay attention to the date / time listed for your cohort.</p>
      <div v-for="(cohortDate, index) of filteredCohorts" class="cohort1">
        <h3>Cohort {{ cohortDate.cohort }}: {{ cohortDate.name }}</h3>
        <p><span>When:</span> {{ cohortDate.when }}</p>
        <ul>
          <li v-for="monthDate of cohortDate.dates">
            {{ parseCohortDate(monthDate) }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import cohortData from '../assets/cohortData.js';
// import * as moment from 'moment';

export default {
  data() {
    return {
      weekOfMonth: cohortData.data().weekOfMonth,
      numCohorts: cohortData.data().numCohorts,
      cohortDates: cohortData.data().cohortDates,
      schoolYear: cohortData.data().schoolYear,
      filteredCohorts: [],
      selectedCohort: 0,
    }
  },
  mounted() {
    this.filteredCohorts = this.cohortDates;
  },
  methods: {
    parseCohortDate(monthDate) {
      // return moment(new Date(monthDate)).format('MMMM Do, YYYY');
      return monthDate;
    },
    filterCohort(filter) {
      switch (filter) {
        case 0:
          // all
          this.filteredCohorts = this.cohortDates;
          break;
        default:
          // everything else
          this.filteredCohorts = this.cohortDates.filter(date => date.cohort === filter);
          break;
      }
      this.selectedCohort = filter;
    }
  }
}
</script>

<style scoped>
h2, h3, span {
  font-weight: bold;
}
.schedule {
    margin: 2rem;
}

.schedule h3 {
    color: #bba2db;
    margin-top: 2rem;
    margin-bottom: 12px;
}

.schedule p {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
}

.schedule ul {
    margin-top: 8px;
}

.schedule ul li {
    font-size: 14px;
}

.schedule .scheduleFilters {
    display: flex;
    align-items: center;
}

.schedule .scheduleFilters .filterGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.schedule .scheduleFilters .filterButton {
    cursor: pointer;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 3px;
    width: 100px;
    text-align: center;
}

.schedule .scheduleFilters .active {
    border-top-color: #bba2db !important;
    border-bottom-color: #bba2db !important;
    border-left-color: #8064a5 !important;
    border-right-color: #8064a5 !important;
    font-weight: bold;
}

.schedule .disclaimer {
    margin-top: 16px;
}

@media screen and (max-width: 800px) {
    .scheduleFilters {
        flex-direction: column;
        align-items: flex-start !important;
    }

    .filterGroup {
        margin-top: 12px;
        flex-wrap: wrap;
    }

    .filterButton {
        margin-bottom: 8px !important;
    }
}
</style>
