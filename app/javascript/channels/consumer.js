// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.
//= require cable
//= require_self
//= require_tree .

import { createConsumer } from "@rails/actioncable"

export default createConsumer()

// createConsumer('http://chat-rails-simpel.herokuapp.com/cable')
