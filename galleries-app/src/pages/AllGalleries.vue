<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(gallery, key) in galleries"
                    :key="key">
                <div>      
                  <!-- <img :src="gallery.images[0].url" alt="Image is being loaded" style="width:320px;height:240;">           -->
                  <router-link
                    class="list-group-item list-group-item-action"
                    tag="button"
                    :to="{ name: `single-gallery`, params: { id: gallery.id }}"
                    exact-active-class="active"
                    >
                    {{ gallery.name }}
                </router-link>
                </div>   
            </li>
        </ul>
    </div>
</template>
<script>
import { galleryService } from "./../services/GalleryService.js";

export default {
  data() {
    return {
      galleries: []
    };
  },

  created() {
    galleryService.getAll().then(response => {
      this.galleries = response.data;
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  }
};
</script>
