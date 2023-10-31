import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitch,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

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

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
