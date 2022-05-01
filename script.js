const feedbackForm = document.getElementById("feedbackForm");
const textArea = document.getElementById("textArea");
const warnMessage = document.getElementById("warnMessage");

function unsuccessfulPost() {
	warnMessage.classList.remove("d-none");
	console.warn("Unsuccessful, user has not entered any feedback.");

	textArea.addEventListener("mousedown", () => {
		warnMessage.classList.add("d-none");
	});
}

function successfulPost() {
	const postedFeedback = document.getElementById("postedFeedback");
	const postedFeedbackDisplay = document.querySelector(
		".posted-feedback-display"
	);
	let pageHeading = document.querySelector(".page-heading");
	const successMessage = document.getElementById("successMessage");

	pageHeading.innerHTML =
		"Thank you for sharing! <i class='bi bi-chat-square-heart'></i> <p class='use-message my-3'>We use your feedback to provide you with improved service.</p>";
	postedFeedback.innerHTML = textArea.value;

	feedbackForm.classList.add("d-none");
	warnMessage.classList.add("d-none");
	postedFeedbackDisplay.classList.remove("d-none");
	successMessage.classList.remove("d-none");
	textArea.value = "";

	console.clear();
	console.info(
		'Successful, feedback posted. "' + textArea.value + '" was posted.'
	);
}

function censor() {
	let censorRegex = /dork|nerd|loser|dweeb/gi;
	const testRegEx = censorRegex.test(textArea.value);

	if (testRegEx == true) {
		const censorMessage = document.getElementById("censorMessage");

		console.warn("Contains restricted content.");
		censorMessage.classList.remove("d-none");
		textArea.addEventListener("mousedown", () => {
			censorMessage.classList.add("d-none");
		});
		return;
	} else {
		successfulPost();
	}
}

function feedbackChecker() {
	if (textArea.value == "") {
		unsuccessfulPost();
	} else {
		censor();
	}
}

feedbackForm.addEventListener("submit", (e) => {
	e.preventDefault();
	feedbackChecker();
});
