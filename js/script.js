const $input = $("input")
const $button = $("button")
const $aside = $("aside")

$button.on("click", () => {
    const searchTerm = $input.val();

    $.ajax({
        url: `https://api.funtranslations.com/translate/dothraki.json?text=${searchTerm}`
    }) .then((data) => {
         console.log(data)
    })
      
    .catch((error) => {
        console.log(error)
    })
})