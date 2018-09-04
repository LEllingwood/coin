const coin = {
    state: 0,
    flip: function () {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.

        this.state = Math.floor(Math.random() * 2);
    },
    toString: function () {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        if (this.state === 0) {
            return "Heads"
        } else {
            return "Tails"
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        if (this.state === 0) {
            coinImage = "faceUpPenny.jpg";
        } else {
            coinImage = "faceDownPenny.jpg";
        }
        image.setAttribute('src', coinImage);
        let coin = document.createElement('div');
        coin.appendChild(image);
        return image;
    }
};

for (let i = 0; i < 20; i++) {
    coin.flip()
    let result = coin.toString()
    console.log(coin.toString())
    const resultText = document.createTextNode(result);
    const newP = document.createElement("p");
    const destination = document.getElementById("textResult");
    newP.appendChild(resultText);
    destination.appendChild(newP);

}

for (let i = 0; i < 20; i++) {
    coin.flip()
    let resultPicture = coin.toHTML()
    const newP = document.createElement("p");
    const destination = document.getElementById("coin");
    newP.appendChild(resultPicture);
    destination.appendChild(newP);

}