import { useEffect, useState } from 'react'

const PREFIX = 'dytefrontend'

function fun(){
  fetch("https://pastebin.com/api/api_post.php", {
  mode: 'no-cors',
  body: "api_dev_key=YOUR API DEVELOPER KEY&api_paste_code=test&api_option=paste",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
}).then(data => {console.log(data)})
}

function MyLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
      const jsonValue = localStorage.getItem(prefixedKey)
      if (jsonValue != null) return JSON.parse(jsonValue)
  
      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue
      }
    })
  
    useEffect(() => {
      localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
  
    return [value, setValue]
}

export default MyLocalStorage
