<script lang="ts">
import { decodeCredential } from 'vue3-google-login'

export default {
  mounted() {
    console.info("Hello");
  },
  methods: {
    callback: function (response: any) {
      // decodeCredential will retrive the JWT payload from the credential
      const userData = decodeCredential(response.credential)
      console.log("Handle the userData: ", userData)
    }
  }
};
</script>

<template>
  <main>
    <div>Welcome</div>
    <GoogleLogin :callback="callback" prompt auto-login/>
  </main>
</template>
