<template>
  <div>
    <div class="h-screen w-full flex overflow-hidden">
      <!-- SideNavBar -->
      <SideNavBar/>

      <main
        class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
        duration-500 ease-in-out overflow-y-auto w-10/12">
        <div class="mx-2 my-2">
          <MainHeader/>
          <Nuxt />
        </div>
        
        
      </main>

    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/UI/MainHeader.vue"
import SideNavBar from "@/components/UI/SideNavBar.vue"
export default {
  components:{
    MainHeader,
    SideNavBar,
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
