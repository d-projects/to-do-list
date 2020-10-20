<?php
echo <<<HTML
<!DOCTYPE html>
<html lang = "en">

<head>
	<meta chatset = "utf-8">
	<title> To Do List </title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<link href = "main.css" rel = "stylesheet">

</head>

<body>


	<main class = "container h-100 d-flex justify-content-center align-items-center">


		<div class = "card h-50 to-do">
			<div class = "card-header">
				<h4 class = "text-center"> My To Do List </h4>
			</div>

			<div class = "card-body overflow-auto">
				<ul class = "list-group list-group-flush">
					<!-- Tasks to go in here-->
				</ul>
			</div>

			<div class = "card-footer">
				<div class = "row">
					<div class = "col-2">
						<i class = "fa fa-plus-circle add" name = "add"></i>
					</div>
					<div class = "col-10">
						<input type = "text" name = "new-todo" class = "new-todo">
					</div>
				</div>
			</div>

		</div>

	
	</main>

	
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src = "main.js"></script>

</body>

</html>
HTML;


