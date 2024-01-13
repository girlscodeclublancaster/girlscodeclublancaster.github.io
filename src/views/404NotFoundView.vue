<template>
  <div class="notfound">
    <h1>404: Page Not Found</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>Oops! We don't know what to do with this URL. Use our navigation up top to learn more about Girls Code Club.</p>
      <div class="notFoundAnimation">
        <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_tonsVH.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
    margin: 0px !important;
    color: black;
    padding-top: 2rem;
}

.pageContent {
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
}

p {
    text-align: center;
    margin: 1rem;
}

.notfound {
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: center !important;
}

@media (min-width: 1024px) {
  .notfound {
    min-height: 100vh;
  }
}
</style>
