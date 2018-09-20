<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(gallery, key) in galleries"
                    :key="key">
                <!-- <router-link
                    class="list-group-item list-group-item-action"
                    tag="button"
                    :to="{ name: `/galleries/${gallery.id}`, params: { id: gallery.id }}"
                    exact-active-class="active"
                    >
                    {{ gallery.name }}
                </router-link> -->{{ gallery.name }}
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
    });
  }
};
</script>
