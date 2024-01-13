<template>
  <main>
    <div class="shero">
      <img :src="`https://girlscodeclublancaster.github.io/sheroes/${img}`" />
    </div>
  </main>
</template>

<script>
export default {
    props: ['name', 'born', 'died', 'img', 'description', 'link', 'video'],
    data() {
        return {
            isOpen: false,
            sheroName: "",
            sheroBorn: "",
            sheroDied: "",
            sheroImg: "",
            sheroDescription: "",
            sheroLink: "",
            sheroVideo: ""
        }
    },
    mounted() {
        this.sheroName = this.name
        this.sheroBorn = this.born
        this.sheroDied = this.died
        this.sheroImg = this.img
        this.sheroDescription = this.description
        this.sheroLink = this.link
        this.sheroVideo = this.video
        console.log(this.name)
    },
    methods: {
        viewMore() {
            this.isOpen = !this.isOpen;
        },
    }
}
</script>

<style scoped>
.shero {
  margin: 1.5rem;
}

img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 200px;

    background-color: #f0e8d5;
}

</style>