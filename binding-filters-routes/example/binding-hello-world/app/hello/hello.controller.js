function helloController() {
    var self = this

    self.message = {
    	text: 'hello'
    }

    self.name = ''

    self.greet = function() {
    	alert(self.message.text + ' ' + self.name)
    }
}