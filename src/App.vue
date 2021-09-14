<template>
  <div id="app">
    <header>
      <navbar-component></navbar-component>
    </header>

    <div class="bg-gray-200 h-full md:h-screen pt-20">
      <vue-page-transition name="fade-in-right">
        <router-view/>
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
export default {
  components: { NavbarComponent }
}
</script>
