$(document).ready(function() {
	var Today=new Date();
	var age=Today.getFullYear() - 1994;
	$("#copyright").html("<p>Copyright &copy;" + Today.getFullYear() + " Lancer All Rights Reserved.</p>");
	$("#age").html('年齡：' + age);
});