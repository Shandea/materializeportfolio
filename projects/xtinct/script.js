// Get the Animal modal
var animalModal = document.getElementById("animalModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var imageArray = ["Images/tiger2.jpg", "Images/giantpanda.jpg", "", "Images/asianelephant.jpg", "Images/gorilla2.jpg", "Images/snow_leopard1.jpg", "Images/orangutan4.jpg", "", "Images/blackrhino.jpg", "Images/african_penguin2.jpg", "Images/redpanda7.jpg", "Images/polarbear10.jpg"];
var statusImage = ["Images/status.jpg", "Images/status-vu.jpg", "", "Images/status.jpg", "Images/status-cr.jpg", "Images/status-vu.jpg", "Images/status-cr.jpg", "", "Images/status-cr.jpg", "Images/status.jpg", "Images/status.jpg", "Images/status-vu.jpg"];

$(".animal-button").click(function () {
    animalModal.style.display = "block";

    fetch('endangered.json')
        .then(response => response.json())
        .then(data => {

            let animals = data.allSpecies;
            var animalIndex = parseInt(this.value)
            $("#animal-name").text(animals[animalIndex].name)
            $("#animal-image").attr("src", imageArray[animalIndex])
            $("#status-img").attr("src", statusImage[animalIndex])
            $("#science").html("<b>Scientific Name: </b>" + animals[animalIndex].scientific_name);
            $("#status").html("<b>Endangered Status: </b>" + animals[animalIndex].status);
            $("#population").html("<b>Population: </b>" + animals[animalIndex].population);
            $("#habitat").html("<b>Habitat: </b>" + animals[animalIndex].habitat);
            $("#location").html("<b>Area Found: </b>" + animals[animalIndex].location);
            $("#animal-desc").text(animals[animalIndex].description)
            switch (animalIndex) {
                case 0: tigerRender();
                    break;
                case 1: pandaRender();
                    break;
                case 3: elephantRender();
                    break;
                case 4: gorillaRender();
                    break;
                case 5: snowRender();
                    break;
                case 6: orangRender();
                    break;
                case 8: rhinoRender();
                    break;
                case 9: pengRender();
                    break;
                case 10: redRender();
                    break;
                case 11: polarRender();
                    break;

                default:
                    break;
            }
        });
});


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    animalModal.style.display = "none";
    $('#graph').empty();

};

// $("#deforest-img1").addClass("center")
