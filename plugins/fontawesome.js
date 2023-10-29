import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'

import {
  faBars,
  faBlog,
  faUser,
  faTags,
  faCopy,
  faHouse,
  faSignOut,
  faHamburger,
  faRegistered,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBlog,
  faBars,
  faCopy,
  faTags,
  faUser,
  faHouse,
  faSignOut,
  faHamburger,
  faRegistered,
  faProjectDiagram
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
