<template>
    <div>
        
    </div>
</template>

<script>
import { galleryService } from "./../services/GalleryService.js";
import { imageService } from "./../services/ImageService.js";

export default {
  data() {
    return {
      gallery: {},
      images: []
    };
  },

  created() {
    galleryService.get(this.$route.params.id).then(response => {
      this.gallery = response.data;
    })
  },
  beforeMount () {
    imageService.get(this.gallery.id).then(response =>  {
        this.images = response.data;
        console.log(this.images)
    })
  }
  // beforeRouteEnter (to, from, next) {
  //       imageService
  //       .get(to.params.id)
  //       .then((response) => {
  //           next((vm) => {
  //           vm.images = response.data
  //           console.log(vm.images);
  //           })
  //       })
  //       .catch(error => {
  //               this.errors = error.response.data.errors;
  //               });
  //   } 
};
</script>

<style>
</style>
