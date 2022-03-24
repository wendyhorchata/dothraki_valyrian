$.ajax({
    url:`curl -X GET "http://api.funtranslations.com/translate/dothraki?text=home%20" -H  "accept: application/js" -H  "content-type: application/json"`
}) .then((data) => {
    console.log(data)
})
