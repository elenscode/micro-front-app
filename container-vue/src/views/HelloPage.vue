<template>
  <OtherComp msg="Using Module Federation" />
</template>
<script>
import { defineAsyncComponent } from "vue";
const OtherComp = defineAsyncComponent(() => import("helloVue/HelloVueApp"));

export default {
  name: "AsynComponent",
  components: {
    OtherComp,
  },
};
</script>

