$(document)
		.ready(
				function() {
					$
							.getJSON(
									"http://localhost:8080/api?size=30",
									function(result) {
										var emb = result._embedded
										var p = emb.people
										var output = '<tr> <th>First Name</th> <th>Last Name</th> <th>Street Address</th><th>City</th><th>Post Code</th></tr> '
										$
												.each(
														p,
														function(key, value) {

															output += '<tr><td>'
																	+ value.firstName
																	+ '</td>';
															output += '<td>'
																	+ value.lastName
																	+ '</td>';
															output += '<td>'
																	+ value.streetAddress
																	+ '</td>';
															output += '<td>'
																	+ value.city
																	+ '</td>';
															output += '<td>'
																	+ value.postCode
																	+ '</td></tr>';

														});
										$("#peopleTable").append(output);

									});

				}

		);

function updateTable() {

	var lastName = document.getElementById("name").value

	if (lastName == "") {
		URL = "http://localhost:8080/api"

	} else {

		var input = lastName.replace(/\w+/g, function(txt) {
			// uppercase first letter and add rest unchanged
			return txt.charAt(0).toUpperCase() + txt.substr(1);
		}).replace(/\s/g, '');// remove any spaces

		lastName = input;
		var URL = "http://localhost:8080/api/search/findByLastName?lastName="
				+ lastName
	}

	$
			.getJSON(
					URL,
					function(result) {
						var emb = result._embedded
						var p = emb.people

						if (p.length == 0) {
							output = "<tr><td><h4> No Data Matches The Specified Last Name </h4></td></tr>"
						} else {

							var output = '<tr> <th>First Name</th> <th>Last Name</th> <th>Street Address</th><th>City</th><th>Post Code</th></tr> '
							$.each(p, function(key, value) {

								output += '<tr><td>' + value.firstName
										+ '</td>';
								output += '<td>' + value.lastName + '</td>';
								output += '<td>' + value.streetAddress
										+ '</td>';
								output += '<td>' + value.city + '</td>';
								output += '<td>' + value.postCode
										+ '</td></tr>';

							});
						}

						var table = document.getElementById("peopleTable");
						table.innerHTML = output

					});

}

function sortTable() {

	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("peopleTable");
	switching = true;
	/*
	 * Make a loop that will continue until no switching has been done:
	 */
	while (switching) {
		// start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*
		 * Loop through all table rows (except the first, which contains table
		 * headers):
		 */
		for (i = 1; i < (rows.length - 1); i++) {
			// start by saying there should be no switching:
			shouldSwitch = false;
			/*
			 * Get the two elements you want to compare, one from current row
			 * and one from the next:
			 */
			x = rows[i].getElementsByTagName("TD")[0];
			y = rows[i + 1].getElementsByTagName("TD")[0];
			// check if the two rows should switch place:
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				// if so, mark as a switch and break the loop:
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			/*
			 * If a switch has been marked, make the switch and mark that a
			 * switch has been done:
			 */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}
