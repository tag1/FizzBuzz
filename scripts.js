$(document).ready(function () {

	var enterResponse = function(integer) {
		for (number = 1; number <= integer; number++)
			if (number % 15 === 0) {
				$(".stuff").replaceWith("<p class='stuff'>" + "fizzbuzzy" + "</p>");
			} 
			else
				if (number % 5 === 0) {
					$(".stuff").replaceWith("<p class='stuff'>" + "buzz" + "</p>");
				}
				else
					if (number % 3 === 0) {
						$(".stuff").replaceWith("<p class='stuff'>" + "fizzy" + "</p>");
					}
					else
						$(".stuff").replaceWith("<p class='stuff'>" + number + "</p>");
		};


	$("button").click(function() {
		var magicNumber = $("input").val();
		var magicInput = +magicNumber;
		$("input").val(" ");
		enterResponse(magicInput);
	})
	
	

}
);



