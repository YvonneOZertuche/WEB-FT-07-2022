const ourFetch = (url) => {
    let promise = new Promise((resolve, reject) =>{
      let xhr = newXMLttpRequest();

      xhr.open('GET', url)

      xhr.send()
    

        xhr.onreadystatechange = () =>{

        if(xhr.readyState == 4 && xhr.status == 200){
            let data = JSON.parse(xhr.responseText)
            resolve(data)
        }
        else if (xhr.readyState == 4 && xhr.status !==200){
          reject('error in data')
        }
    } 
  })
      return promise;
}
