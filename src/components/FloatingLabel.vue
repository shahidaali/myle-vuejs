<template>
    <div class="floating-label-wrap" :class="wrapperClass">
        <slot name="input"></slot>
        <label v-if="label" class="floating-label mb-0" :class="labelClasses">
            <span>{{ label }}</span>
        </label>
    </div>
</template>
<script>
export default {
  name: "floating-label",
  props: {
    wrapperClass: {
      type: String,
      description: "Extra classes for wrapper"
    },
    label: {
      type: String,
      description: "Floating Label"
    },
    labelClasses: {
      type: String,
      description: "Label class"
    },
  },
  data() {
    return {
      focused: false
    };
  },
  computed: {
    
  },
  methods: {
    
  }
};
</script>
<style>
</style>
