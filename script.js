const input = document.getElementById('input')
const error = document.getElementById('error')
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const checkEmail = () => {
  !regex.test(input.value) ? error.style.display = 'block' : error.style.display = 'none'
}
