# AngularJS

## <a href="https://github.com/HackYourFuture/AngularJS/tree/master/slides">Slides</a>

## Day 1: Controllers

Hello World

``` HTML
<body>
<div ng-app="firstApp">
	<div ng-controller="firstController as ctrl">
		{{ ctrl.message }}	
	</div>
</div>
</body>
```

``` javascript
angular.module('firstApp', [])
.controller('firstController', [firstController])

function firstController() {
	var vm = this
	vm.message = 'Hello World'
}
```

Documentation / Tutorials

* <a href="http://www.w3schools.com/angular/angular_intro.asp">W3Schools Intro</a>
* <a href="https://docs.angularjs.org/api/ng">ng api </a>
* <a href="https://docs.angularjs.org/guide/controller">controller guide</a>

## Day 2: Services & Directives

Run a temporal server with <a href="http://brackets.io/">brackets</a> or installing <a href="https://www.python.org/downloads/">python(2.x.x)</a> and typunc in the command promp ```python -m SimpleHTTPServer```

* <a href="https://docs.angularjs.org/guide/services">https://docs.angularjs.org/guide/services</a>

* <a href="https://docs.angularjs.org/guide/directive">https://docs.angularjs.org/guide/directive</a>

## Day 3: Filters & Routes

``` HTML
// Replace X.Y.Z with the value of the angular version that you are using

<script src="http://ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route.js" />
```

``` javascript
// app.js

angular.module("myApp", ["ngRoute"])
```

* <a href="https://docs.angularjs.org/api/ng/filter/filter">https://docs.angularjs.org/api/ng/filter/filter</a>

* <a href="https://docs.angularjs.org/api/ngRoute/">https://docs.angularjs.org/api/ngRoute/</a>