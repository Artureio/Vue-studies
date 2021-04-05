<template>
  <div
    @click="handleToggle"
    class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray"
  >
    <div class="flex items-center justify-between w-full mb-8">
      <badge :type="feedback.type" />
      <span class="font-regular text-brand-graydark">
        {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
      </span>
    </div>

    <div class="text-lg font-medium text-gray-800">
      {{ feedback.text }}
    </div>
    <div
      class="flex mt-8 animate__animated animate__fadeInUp animate__faster"
      v-if="state.isOpen"
    >
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none"
            >Página</span
          >
          <span class="font-medium text-gray-700 uppercase select-none">{{
            feedback.page
          }}</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none"
            >Dispositivo</span
          >
          <span class="font-medium text-gray-700 uppercase select-none">{{
            feedback.device
          }}</span>
        </div>
      </div>
      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none"
            >Usuário</span
          >
          <span class="font-medium text-gray-700 uppercase select-none">{{
            feedback.fingerprint
          }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-8" v-if="!state.isOpen">
      <icon name="chevron-down" size="24" :color="brandColors.graydark"/>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import pallete from '../../../pallete'
import { getDiffTimeBetweenCurrentDate } from "../../utils/date";
import Badge from "./Badge";


export default {
  components: { Badge },
  props: {
    feedback: { tyoe: Object, required: true },
    isOpened:{type:Boolean, default:false}
  },
  setup(props) {
    const state = reactive({
      isOpen:props.isOpened
    })
    function handleToggle() {}

    return {
      state,
      handleToggle,
      getDiffTimeBetweenCurrentDate,
      brandColors: pallete.brand
    };
  },
};
</script>
