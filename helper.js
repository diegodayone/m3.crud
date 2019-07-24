getEvents = async () => {
    var response = await fetch("https://strivetestapi.azurewebsites.net/api/agenda/", { mode: 'no-cors' });
    console.log(await response.text());
    //return await response.json();
}