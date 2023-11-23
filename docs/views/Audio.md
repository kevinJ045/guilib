# Audio

An audio controller widget.

### Constructor

```javascript
constructor(src: string | object, options: object)
``` 
> Audio is a copy of the Video class, has no special methods or properties

#### Example
```ts
let audio = new Audio('/path/to/audio.mp3');
// or
let audio = new Audio({ src: '/path/to/audio.mp3', controls: true });
audio.play();
let time = new Text(audio.currentTime.toString());
```