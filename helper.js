getEvents = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://strive-school-testing-apis.herokuapp.com/api/agenda/"; // site that doesn’t send Access-Control-*
    var response = await fetch(proxyurl + url);
    return await response.json();
}