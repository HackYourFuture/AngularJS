function helloController(helloWorldService) {
    var self = this
    
    self.message = ''
    
    helloWorldService.getMessage().then(function(response) {
        console.log(response)
        self.message = response.data.text
    }).catch(function(error) {
        console.log(error)
    })
}