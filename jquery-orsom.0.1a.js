(function( $ ){
	var opts = {},
		default_opts = {
			points: '',
		};

	$.fn.orsom = function(options) {
		var maps = jQuery(this);
		maps.each (function (){
			map = jQuery(this);
			setupMapCSS(map);
			addTiles(map);
		});
	};

	function setupMapCSS (map) {
		map
			.css('overflow', 'hidden')
			.css('border', '1px red solid')
			.css('position', 'relative')	// allows elements inside to be positioned absolutely
	}

	function longLatToTiles (zoom, long, lat) {
		// from : http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Implementations
		n = Math.pow(2, zoom);
		tilex = ((long + 180) / 360) * n
		// tiley = (1 - // needs finishing (sec is 1/cos)
	}

	function addTiles (map, zoom, tilex, tiley) {
		getTile('http://tile.openstreetmap.org/0/0/0.png').appendTo(map);
	}

	function getTile (location) {
		var tile = jQuery('<img />')
		tile.attr('src', location);
		tile.attr('class', 'tile');
		tile.css('position', 'absolute');
		tile.draggable();
		return tile;
	}
})( jQuery );
