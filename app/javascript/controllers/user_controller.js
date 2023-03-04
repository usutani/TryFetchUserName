import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user"
export default class extends Controller {
  static targets = [ "id", "output" ]

  fetch() {
    fetch(`users/${encodeURIComponent(this.idTarget.value)}.json`)
    .then(response => {
      if (response.ok) {
        response.json().then(userInfo => {
          this.outputTarget.textContent = userInfo.name
        })
      }
    })
  }
}
