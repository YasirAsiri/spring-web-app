$(document)
		.ready(
				function() {
					$
							.getJSON(
									"http://localhost:8080/api?size=30",
									function(result) {
										var emb = result._embedded
										var p = emb.people
										var output = ''

										$('#peopleTable').DataTable( {
											"data": p,
											"columns" : [
												{ "data": "firstName" },
												{ "data": "lastName" },
												{ "data": "streetAddress" },
												{ "data": "city" },
												{ "data": "postCode" }
											]
										});
									});

				}

		);