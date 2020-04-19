<template>
    <editor-menu-bar :editor="editor" v-slot="{}">
      <q-toolbar class="menubar">
        <q-toolbar-title style="text-align: center;">
          المشاهدة
        </q-toolbar-title>
       <q-btn dense flat round icon="search" />
      </q-toolbar>
    </editor-menu-bar>

</template>

<script>
import UiMixin from 'src/mixins/ui'
import { EditorMenuBar } from 'tiptap'
import { mapActions } from 'vuex'
export default {
  name: 'BasicToolbar',
  mixins: [UiMixin],
  props: [],
  components: {
    EditorMenuBar
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
