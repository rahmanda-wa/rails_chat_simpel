import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("You are connected");
    $('#msg').scrollTop($('#msg')[0].scrollHeight);
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("You are NOT connected");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    $('#msg').append('<div class="message border rounded border-success p-1 m-1 text-wrap">'+ data.content + '</div>');
    $('#chat').val('');
    $('#msg').scrollTop($('#msg')[0].scrollHeight);
    console.log(data)

  }
});

