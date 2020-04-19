<template>
  <q-toolbar style="text-align: center;">
        <q-toolbar-title>
          المشاهدة
        </q-toolbar-title>
       <q-btn dense flat round icon="search" />
  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { mapActions } from 'vuex'
export default {
  name: 'DefaultToolbar',
  mixins: [UiMixin],
  props: [],
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
