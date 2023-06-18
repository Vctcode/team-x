let currentCard = 0;
showCard(currentCard);

function showCard(count) {
  // Displays the specified card of the form
  let cards = document.getElementsByClassName("card");
  cards[count].style.display = "block";

  if (count == 0) {
    document.getElementById("prevBtn").style.visibility = "hidden";
  } else {
    document.getElementById("prevBtn").style.visibility = "visible";
  }

  if (count == cards.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Confirm";
  }
  if (count > cards.length + 1) {
    document.getElementById("nextBtn").style.visibility = "hidden";
  }
}

function pageChange(count) {
  let cards = document.getElementsByClassName("card");

  cards[currentCard].style.display = "none";
  // increment/decrement in current card by 1
  currentCard = currentCard + count;
  console.log(currentCard);

  // if the form get to the last page
  if (currentCard >= cards.length) {
    document.getElementById("form").submit();
    return (count = 0);
  }

  showCard(currentCard);
}