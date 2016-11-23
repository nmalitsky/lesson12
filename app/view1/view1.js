'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })
    }])

    .filter('formatPokemonNames', function(){
	    return function(pokemons){
		for (let i = 0; i < pokemons.length; i++) {
			pokemons[i].name = pokemons[i].name.toUpperCase();
		}
		return pokemons;
    	}
    })

    .filter('getPokemonTypes', function(){
	    return function(pokemons){
		let types = [];
		types.push({ value: '', title: 'Без фильтра'});
		for (let i = 0; i < pokemons.length; i++) {
			let new_type = { value: pokemons[i].type[0], title: pokemons[i].type[0] };
			if(!types.find(type => type.value == new_type.value))  {
				types.push(new_type);
			}
		}
		return types;
    	}
    })

    .controller('View1Ctrl', function ($scope, $window, formatPokemonNamesFilter, getPokemonTypesFilter) {

        $scope.pokemons = [{
            "abilities": [
                "Overgrow"
            ],
            "detailPageURL": "/us/pokedex/bulbasaur",
            "weight": 15.2,
            "weakness": [
                "Fire",
                "Flying",
                "Ice",
                "Psychic"
            ],
            "height": 28,
            "collectibles_slug": "bulbasaur",
            "featured": "true",
            "id": "1",
            "name": "Bulbasaur",
            "ThumbnailAltText": "Bulbasaur",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            "slug": "bulbasaur",
            "type": [
                "grass",
                "poison"
            ]
        }, {
            "abilities": [
                "Blaze"
            ],
            "detailPageURL": "/us/pokedex/charmander",
            "weight": 18.7,
            "weakness": [
                "Ground",
                "Rock",
                "Water"
            ],
            "height": 24,
            "collectibles_slug": "charmander",
            "featured": "true",
            "id": "4",
            "name": "Charmander",
            "ThumbnailAltText": "Charmander",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
            "slug": "charmander",
            "type": [
                "fire"
            ]
        }, {
            "abilities": [
                "Torrent"
            ],
            "detailPageURL": "/us/pokedex/squirtle",
            "weight": 19.8,
            "weakness": [
                "Electric",
                "Grass"
            ],
            "height": 20,
            "collectibles_slug": "squirtle",
            "featured": "true",
            "id": "7",
            "name": "Squirtle",
            "ThumbnailAltText": "Squirtle",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
            "slug": "squirtle",
            "type": [
                "water"
            ]
        }, {
            "abilities": [
                "Static"
            ],
            "detailPageURL": "/us/pokedex/pikachu",
            "weight": 13.2,
            "weakness": [
                "Ground"
            ],
            "height": 16,
            "collectibles_slug": "pikachu",
            "featured": "true",
            "id": "025",
            "name": "Pikachu",
            "ThumbnailAltText": "Pikachu",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
            "slug": "pikachu",
            "type": [
                "normal"
            ]
        }, {
            "abilities": [
                "Adaptability",
                "Run Away"
            ],
            "detailPageURL": "/us/pokedex/eevee",
            "weight": 14.3,
            "weakness": [
                "Fighting"
            ],
            "height": 12,
            "collectibles_slug": "eevee",
            "featured": "true",
            "id": "133",
            "name": "Eevee",
            "ThumbnailAltText": "Eevee",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
            "slug": "eevee",
            "type": [
                "normal"
            ]
        }];

	// AngularJS works with dirty checking: it needs to call the function each cycle to be sure that it doesn't return a new value and that the DOM doesn't need to be updated.
	// source - http://stackoverflow.com/questions/26992193/using-ng-class-with-a-function-call-called-multiple-times
	let cssMap = {
		"grass": "grassCss",
		"fire": "fireCss",
		"water": "waterCss",
		"electric": "electricCss",
		"normal": "normalCss"
	}

	$scope.getCss = function(type) {
		return cssMap[type[0]];
	}

	$scope.formatedPokemons = formatPokemonNamesFilter($scope.pokemons);

	$scope.pockemonType = '';
	$scope.pokemonTypes = getPokemonTypesFilter($scope.pokemons);

        $scope.myOrderProperty = 'id';

	$scope.doAlert = function(name) {
		$window.alert(name)
	}

    });