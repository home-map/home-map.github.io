import './style.css'
import { header } from './src/header/header'
import { main } from './src/main/main'

document.querySelector('#app').innerHTML = `
${header}
${main}
`