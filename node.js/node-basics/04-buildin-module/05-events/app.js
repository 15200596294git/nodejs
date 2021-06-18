const eventEmitter = require('events')

class MyEventEmitter extends eventEmitter {

}

const event = new MyEventEmitter()

event.on('play', value=> {
  console.log(value)
})

event.emit('play', '打游戏')