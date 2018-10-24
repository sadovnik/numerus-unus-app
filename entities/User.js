import defaultAvatar from '../assets/defaultAvatar.png'

export default class User {
  constructor (firstname, lastname, score = 0, avatarUrl = null) {
    this.firstname = firstname
    this.lastname = lastname
    this.score = score
    this.avatarUrl = avatarUrl
  }

  get name () {
    return this.firstname + ' ' + this.lastname
  }

  get avatar () {
    return this.avatarUri() || defaultAvatar
  }

  avatarUri () {
    if (this.avatarUrl === null) {
      return null
    }

    return { uri: this.avatarUrl }
  }
}
