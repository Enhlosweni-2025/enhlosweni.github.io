const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;

    // Toggle active state
    faqItem.classList.toggle("active");
  });
});
