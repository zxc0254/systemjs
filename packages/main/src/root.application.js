import * as singleSpa from 'single-spa'
import config from './app.config'
import System from 'systemjs'

function registerApp (project) {
  singleSpa.registerApplication(project.name, () =>  System.import(project.name), (location) => {
    console.log(location)
    return project.base ? true : location.hash.startsWith(`#/${project.name}`)
  })
}

function load () {
  config.forEach(project => {
    registerApp(project)
  })

  singleSpa.start()
}

load()
