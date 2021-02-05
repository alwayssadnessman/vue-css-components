<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Index msg="hello" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Index from '@/views/index.vue'; // @ is an alias to /src

@Options({
  components: {
    Index,
  },
})
export default class Home extends Vue {}
</script>
