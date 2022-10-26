<template>
  <main>
    <div class="who">
      <div class="served">
        <p>To Date,</p>
        <h1>{{ participants }}</h1>
        <p>Girls Have Participated</p>
        <a href="https://lancastersciencefactory.org/stemeducation/girlscodeclub/girls-code-club-registration/" target="_blank" class="regularFont">Register</a>
      </div>
      <div class="details">
        <h2>Who Are We?</h2>
        <p>Girls Code Club is an organization hosted by the Lancaster Science Factory that strives to expose girls aged 8-13 to the world of coding, and coding-related concepts. This is a <b>monthly</b> facilitated meetup.</p>
        <a href="https://lancastersciencefactory.org/stemeducation/girlscodeclub/" target="_blank" class="regularFont">Learn More</a>
      </div>
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>

<script>
import cohortData from '../assets/cohortData.js';
export default {
  data() {
    return {
      participants: cohortData.data().participants
    }
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: bold;
}

h2 {
  padding-top: 1rem;
}

.who {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  padding-top: 2rem;
  padding-bottom: 2rem;

  .served {
    width: 275px;
    background-color: #bba2db;
    padding: 2rem;
    margin-right: 10px;

    p {
      margin: 0;

      &:last-of-type {
        margin: 0;
        padding-bottom: 2rem;
      }
    }

    h1 {
      color: black;
      margin: 0.25rem 0 0.25rem 0;
      font-size: 50px;
    }

    a {
      background-color: #f7f2e6;
      color: black;
      text-decoration: none;
      padding: 8px 16px;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
      text-transform: uppercase;
      font-size: 10px;
    }
  }

  .details {
    width: 350px;
    padding: 0 2rem;

    h2 {
      margin-top: 0;
    }

    p {
      margin-bottom: 1.5rem;
    }

    a {
      background-color: #bba2db;
      color: white;
      text-decoration: none;
      padding: 8px 16px;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.5);
      text-transform: uppercase;
      font-size: 10px;
    }
  }
}

@media screen and (max-width: 780px) {
  .who {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 0 !important;

    .served {
      width: 100% !important;
      padding: 2rem 0 2rem 0 !important;
      margin: 0 !important;
    }

    p, h1, a {
      margin-left: 2rem !important;
      margin-right: 2rem !important;
    }

    .details {
      width: 100% !important;
      margin: 2rem !important;
      padding: 0rem !important;

      h2, p, a {
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
  }
}

</style>