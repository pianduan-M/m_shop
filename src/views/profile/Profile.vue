<template>
  <div id="profile">
   <profile-head />
   <profile-order />
   <profile-tools />
  </div>
</template>

<script>
import ProfileHead from './childComps/ProfileHead'
import ProfileOrder from './childComps/ProfileOrder'
import ProfileTools from './childComps/ProfileTools'

export default {
  components: {
    ProfileHead,
    ProfileOrder,
    ProfileTools
  }
}
</script>

<style>
#profile {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 44px;

  background-color: #f2f2f2;
}
</style>