import { defineComponent, reactive } from 'vue-demi'
import { useBattery } from '.'

export const UseBattery = defineComponent({
  name: 'UseBattery',
  setup(props, { slots }) {
    const data = reactive(useBattery(props))

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
