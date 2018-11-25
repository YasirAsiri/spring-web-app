
$(document)
		.ready(
				function() {
					$
							.getJSON(
									url,
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
				});