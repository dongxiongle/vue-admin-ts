<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <Aside />
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  Header from './header.vue';
import  Aside  from './aside.vue';

export default defineComponent({
  name:  'layout',
  components: {
    Header,
    Aside
  },
  setup() {
    
  },
})
</script>
<style scoped>
.el-header  {
  background: var(--el-color-primary-light-3);
}
</style>