	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 300,
		stagger: 0,
		isFitWidth: true,
		gutter: 50
	});

	$grid.on( 'click', '.grid-item', function() {
		// change size of item via class
		$( this ).toggleClass('grid-item--open');
		// trigger layout
		$grid.masonry();
	});

