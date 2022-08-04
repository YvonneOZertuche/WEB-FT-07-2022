let input = document.querySelector('input')
let button = document.querySelector('button')
button.addEventListener('click', e => {
  let city = input.value
  let nameSplit = city.split(' ').join('%20')

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${nameSplit}&appid=dca2046d1080c39c6cc5f47a523a8fbc`
  )
    .then(result => result.json())
    .then(data => {
      console.log(data)
      console.log(data.main.temp)

      let kelvin = data.main.temp

      let degC = kelvin - 273.15

      let degF = Math.floor(degC * 1.8 + 32)

      console.log(degF)

      let div = document.querySelector('div')

      div.innerHTML = `<h1>Current Temp ${degF} ℉</h1>`
    })
})
