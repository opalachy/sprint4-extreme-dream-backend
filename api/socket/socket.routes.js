
module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        console.log('show must go on')
        socket.on('show to everyone booking', msg=> {
            console.log(msg)
            io.emit('booking', 'booking')
        })

        // socket.on('update the seller' , SellerId =>{
        //     io.emit('bookingToSeller', SellerId)
        // })

        // socket.on('chat topic', topic=>{
        //     if (socket.myTopic) {
        //         socket.leave(socket.myTopic)
        //     }
        //     socket.join(topic)
        //     socket.myTopic = topic;
        // })
    })
}