# react-scanned-qr
##### React scanner and generator component for QR. Triggers function from both ends when scanned.



## Installation
---


##### npm
###

`
 npm i react-scanned-qr
`

##### yarn
###
`
yarn add react-scanned-qr
`


##


## Usage/Examples



---
>`Important: Add your host name/origin to trigger QRCode component onScanned.`
 [Add your origin](https://react-scanned-qr-server.herokuapp.com/add-origin)  
##### QR Scanner
#
> Note: Scanner does not open camera on localhost. You should host somewhere.
#
```javascript
import React from "react";
import { QRScanner } from "react-scanned-qr";

const Example = () => {
     
     function handleScan(data){
         console.log(data)
     }
     
      function handleError(error){
         console.log(error)
     }

   return <QRScanner
          onScanned={handleScan}
          onError={handleScan}
          style={{
                height: 256,
                width: 256,
            }}
         
        />
      }
```



##### QR Code
#

```javascript
import React from "react";
import { QRCode } from "react-scanned-qr";

const Example = () => {
     
     function handleScan(data){
         console.log(data)
     }
     
      function handleError(error){
         console.log(error)
     }

   return <QRCode
          onScanned={handleScan}
          onError={handleScan}
          value={"This is my qr"}
        />
      }
```

## API Reference
---
#
##### QR Scanner
#


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `onScanned` | `function` | **required** :  It returns a `data` when QR code gets scanned. |
| `onError` | `function` | **required** :  It returns a `error` when something went worng. |
| `onLoad` | `function` | Execute function passed to this prop when component is loaded. |
| `delay` | `number` | Delay after each scan |
| `facingMode` | `"user" | "environment"` | Camera mode |
| `videoStyle` | `object` | Styles for video container |
| `videoClassName` | `string` | Classname for video container |
| `showViewFinder` | `boolean` | Enable/Disable Showfinder in video |
| `button` | `boolean` | Enable/Disable for Button |
| `buttonLabel` | `string` | Text in Button component |
| `buttonStyle` | `object` | Styles for button |
| `buttonClassName` | `string` | Classname for button |
| `loadingComponent` | `Element` | HTML element for loading |

#
##### QR Code
#


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `value` | `string` | **required** :  Value for QR |
| `onScanned` | `function` | **required** :  It returns a `data` when QR code gets scanned. |
| `onError` | `function` | **required** :  It returns a `error` when something went worng. |
| `style` | `object` | Styles for QR code |
| `className` | `string` | Classname for QR |
| `bgColor` | `string` | Background color for QR |
| `fgColor` | `string` | Foreground color for QR |
| `size` | `number` | Size for QR |
| `level` | `"L" | "M" | "Q" | "H";` | Error correction level of QR |


## Support

For support, email at Sanket16warhekar@gmail.com.

## Credits

- **@rauchg, @darrachequesne:**  [socket.io-client](https://www.npmjs.com/package/socket.io-client) 

- **@rtkhanas:**  [react-qr-code]( https://www.npmjs.com/package/react-qr-code) 


- **@jodusnodus:**  [react-qr-reader]( https://www.npmjs.com/package/react-qr-reader) 

## Authors

- [@SanketW12](https://github.com/SanketW12)
---




` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:`

`The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.`

`THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE`


