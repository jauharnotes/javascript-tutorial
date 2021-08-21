const listNew = `
            <div class="card my-3 mx-3" style="width: 18rem">
              <img
                src="https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>`;

for (i = 0; i < 9; i++) {
  const node1 = document.getElementById("card");
  const isiCard = node1.innerHTML;
  node1.innerHTML = isiCard + listNew;
}
