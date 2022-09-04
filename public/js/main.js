const deleteBtn = document.querySelectorAll(".del");
const quoteItem = document.querySelectorAll("span.not");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteQuote);
});

async function deleteQuote() {
  const quoteId = this.parentNode.dataset.id;
  try {
    const response = await fetch("quotes/deleteQuote", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        quoteIdFromJSFile: quoteId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
