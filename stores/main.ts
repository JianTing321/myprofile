// import { defineStore } from 'pinia'
// main is the name of the store. It is unique across your application
// and will appear in devtools
// import { useTestStore } from './test'

// interface main {
//   counter:number
//   name:string
//   car:string
// }
// export interface GlobalConfig {
//   username?: string | null;
//   notificationList: string[];
//   lang: 'zh' | 'jp' | 'en';
// }

export const useMainStore = defineStore('main', () => {
  // 我们不会直接暴露这个元素
  const counter = ref<number>(0)
  const name = ref('Eduardo')
  const car = ref('BMW')

  const doubleCounter = computed(() => counter.value++)
  // const otherGetter = computed(() => car + testSet)

  function clickCounter () {
    return counter.value++
  }
  // 監視
  watch(counter, (newValue:number, oldValue) => {
    console.log('sum变化了', newValue, oldValue)
    if (newValue === 10) {
      alert('aaaa')
    }
  })
  // composition api的監聽方式 要關閉監聽要再呼叫W
  const Stop = watchEffect(() => {
    console.log(counter.value)
    if (counter.value === 15) {
      counter.value = 1
    }
  })

  return {
    Stop,
    counter,
    name,
    car,
    doubleCounter,
    clickCounter
  }
})

// export const useMainStore = defineStore('main', {
//   // a function that returns a fresh state
//   state: () => ({
//     counter: 0,
//     name: 'Eduardo',
//     car: 'BMW'
//   }),
//   // optional getters
//   getters: {
//     // getters receive the state as first parameter
//     doubleCounter: state => state.counter * 2,
//     // use getters in other getters
//     doubleCounterPlusOne (): number {
//       return this.doubleCounter + 1
//     },

//     // 取得useTestStore的store
//     otherGetter (state) {
//       const otherStore = useTestStore()
//       return state.car + otherStore.set
//     }
//   },

//   // optional actions
//   actions: {
//     reset () {
//       // `this` is the store instance
//       this.counter = 0
//     },
//     getList () {
//       // console.log("object");
//       // console.log(useTestStore().testSet);
//       console.log('object')
//     }
//   }
// })
