import { Controller } from "@hotwired/stimulus"
import _ from 'lodash';

// Connects to data-controller="user"
export default class extends Controller {
  static targets = [ "id", "output" ]

  connect() {
    this.debouncedFetch = _.debounce(this.fetch, 1000)
    this.idTarget.addEventListener('keyup', this.debouncedFetch.bind(this))
  }

  disconnect()
  {
    this.idTarget.removeEventListener('keyup', this.debouncedFetch.bind(this))
  }

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
      } else {
        this.outputTarget.textContent = ''
        alert('opps!')
      }
    })
  }
}
