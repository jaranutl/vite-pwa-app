import { registerSW } from 'virtual:pwa-register'

export const initPWA = () => {
  const updateSW = registerSW({
    immediate: true, // get updates ASAP
    onNeedRefresh() {
      // Optional: show a UI (toast/modal) and call updateSW(true) to reload
      console.log('New version available. Call updateSW(true) to apply.')
    },
    onOfflineReady() {
      console.log('App ready to work offline')
    },
  })
  // You can export updateSW to your UI and trigger it from a daisyUI toast
  return updateSW
}