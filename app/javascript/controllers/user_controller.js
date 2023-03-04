import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user"
export default class extends Controller {
  static targets = [ "id", "output" ]

  fetch() {
    const userId = encodeURIComponent(this.idTarget.value)
    // const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const url = `users/${userId}.json`
    fetch(url)
    .then(response => {
      if (response.ok) {
        response.json().then(userInfo => {
          this.outputTarget.textContent = userInfo.name
        })
      }
    })
  }
}
