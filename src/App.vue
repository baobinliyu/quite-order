<template>
    <div class="page-view">
        <div class="page-content">
            <div class="layout">
          头部
            </div>
            <router-view></router-view>
            <div class="footer">
              底部
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'app',
    data() {
        return {
        }
    },
    computed: {
    },
    created: function() {
    },
    methods: {
    }
}
</script>

<style>
.layout {
    position: relative;
  width: 100%;
  height: 45px;
  border: 1px solid red;
  text-align: center;
}

.footer {
    float: left;
    width: 100%;
  height: 100px;
  border: 1px solid red;
  text-align: center;
}
</style>
