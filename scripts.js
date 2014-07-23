$(document).ready(function () {

	for (number = 1; number < 101; number++) {
	if (number % 15 === 0) {
		$("p").append("fizzbuzzy" + "<br><br>");
	} 
		else
			if (number % 5 === 0) {
			$("p").append("buzz" + "<br><br>");
			}
			else
				if (number % 3 === 0) {
					$("p").append("fizz" + "<br><br>");
				}
				else
					 $("p").append(number + "<br><br>");
		}
	}	
);
	

