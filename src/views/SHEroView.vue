<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="sheroes">
      <h2 class="boldedFont">SHEroes (Female Role-Models in Tech)</h2>
      <p>This page will feature all SHEroes that have been presented to Girls Code Club. All graphics have been drawn by Head Coach, Emma Wertz, which is why some images are missing. This page is in progress! Information about each SHEro will also be included.</p>
      <div class="shero-container">
        <div v-for="shero in sheroesSorted" :key="shero.id">
          <Shero
            :name="shero.name"
            :born="shero.born"
            :died="shero.died"
            :img="shero.img"
            :description="shero.description"
            :link="shero.link"
            :video="shero.video"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Shero from '../components/Shero.vue';
export default {
  components: { Shero },
  data() {
    return {
      sheroesSorted: [],
      sheroes: [
        {
          id: 1,
          name: "Ada Lovelace",
          born: "12/10/1815",
          died: "11/27/1852",
          img: "comingsoon.png",
          description: "From a very young age, Ada was invested in the world of math and science. Her mother felt this could help Ada avoid walling into the madness her poet father was perceived to endure. Once she'd reached adulthood, Ada used her math skills to be more involved in computers. She had written a series of notes where one of them is considered to contain the first EVER computer program.",
          link: "https://en.wikipedia.org/wiki/Ada_Lovelace",
          video: "https://www.youtube.com/watch?v=uOkmyICUW_c"
        },
        {
          id: 2,
          name: "Grace Hopper",
          born: "12/9/1906",
          died: "1/1/1992",
          img: "grace.png",
          description: "Grace Hopper had a PhD in mathematics and phsyics by the time she'd joined the Navy. She'd attempted to join the military for WWII, but was rejected due to her gender. She instead enlisted in the reserves where she began her computer science career. She believed that code should be human-readable language, which inspired COBOL. She also coined the term 'debugging'.",
          link: "https://en.wikipedia.org/wiki/Grace_Hopper",
          video: "https://www.youtube.com/watch?v=Fg82iV-L8ZY"
        },
        {
          id: 3,
          name: "Margaret Hamilton",
          img: "margaret.png",
          description: "",
          link: ""
        },
        {
          id: 4,
          name: "Hedy Lamarr",
          img: "hedy.png",
          description: "",
          link: ""
        },
        {
          id: 5,
          name: "Carol Shaw",
          img: "carol.png",
          description: "",
          link: ""
        },
        {
          id: 6,
          name: "Anita Borg",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 7,
          name: "Gladys West",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 8,
          name: "Saffi Goldwasser",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 9,
          name: "Joan Clark",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 10,
          name: "Radia Joy Perlman",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 11,
          name: "Katherine Johnson",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 12,
          name: "Adele Goldberg",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 13,
          name: "Karen Spark Jones",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 14,
          name: "Stephanie Shirley",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 15,
          name: "Joan Ball",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 16,
          name: "Janese Swanson",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
        {
          id: 17,
          name: "Jennifer Granick",
          img: "comingsoon.png",
          description: "",
          link: ""
        },
      ],
    }
  },
  methods: {
  },
  mounted() {
    this.sheroesSorted = this.sheroes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
  }
}
</script>

<style lang="scss" scoped>
h1, p {
  color: black;
  margin-left: 2rem;
}

.sheroes {
  margin: 2rem;

  .shero-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
