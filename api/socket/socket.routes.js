
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        console.log('show must go on')
        socket.on('booking', sellerId => {
            console.log(sellerId)
            io.emit('update exp', 'booking')
            io.emit(sellerId , 'go to profile someone booking')

        })
    })
}