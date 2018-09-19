<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item">
                <!-- <router-link
                    class="list-group-item list-group-item-action"
                    tag="button"
                    :to="{ name: `galleries/${gallery.id}`, params: { id: contact.id }}"
                    exact-active-class="active"
                    v-for="(contact, key) in contacts"
                    :key="key"
                    >
                    {{ contact.first_name }} {{ contact.last_name }}
                </router-link> -->
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
