
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".alert-text").forEach(el => {
		if (el.firstChild)
			el.parentNode.classList.remove("d-none");
		else
			el.parentNode.classList.add("d-none");
	});

	document.querySelectorAll(".alert-close").forEach(el => {
		el.addEventListener("click", function() {
			el.parentNode.classList.add("d-none");
		});
	});
});
