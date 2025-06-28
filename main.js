const rangeText = document.getElementById("rangeValue");
const sliderElement = document.getElementById("myRange");
const butter = document.getElementById("butterText");
const bread = document.getElementById("breadText");
const jelly = document.getElementById("jellyText");
const PB = document.getElementById("PBText");
const saveButton = document.getElementById("save_button");
const rateButton = document.getElementById("rate_button");
const printButton = document.getElementById("print_button");
const shareButton = document.getElementById("share_button");


rangeText.innerHTML='Serving Size: ' + 1;


function sliderChange(){
    rangeText.innerHTML='Serving Size: ' + sliderElement.value;
    butter.innerHTML = sliderElement.value*2 + ' teaspoons butter';
    bread.innerHTML = sliderElement.value*2 + ' slices white bread';
    jelly.innerHTML = sliderElement.value*2 + ' teaspoons any flavor fruit jelly'; 
    PB.innerHTML = sliderElement.value + ' teaspoon peanut butter';
}

function saveButtonClick(){
    saveButton.style.color="green";
    saveButton.innerHTML = "Saved";
    window.location.href="https://auth.allrecipes.com/realms/alrcom/protocol/openid-connect/auth?client_id=alrcom&response_type=code&redirect_uri=https%3A%2F%2Fwww.allrecipes.com%2Fauthentication%2Fcode-exchange&state=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0aEt0WGd2TktjNzRLbklrSFQzdDVlNFNoSXYyT0FiZ0tqTGUzYnpHeFlBPSIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly93d3cuYWxscmVjaXBlcy5jb20vcmVjaXBlLzQ5OTQzL2dyaWxsZWQtcGVhbnV0LWJ1dHRlci1hbmQtamVsbHktc2FuZHdpY2gvI3NhdmU2NjQ5NTI3IiwiaXNzIjoiRG90ZGFzaCBNZXJlZGl0aCIsImV4cCI6MTcxMDMwMTc3MiwiaWF0IjoxNzEwMjk5OTcyLCJoaWRlQ29uZmlybWF0aW9uQmFubmVyIjpmYWxzZX0.y3eveRnWIOtbKSfagW6ZDXbVUF86wktcFC5y7QNrxVQ&scope=openid&reg_source=3833";
}
function rateButtonClick(){
    location.href="#Bottom_Section";
}
function printButtonClick(){
    window.print();
    document.close();
}
function shareButtonClick(){
    shareButton.style.color="Green";
    shareButton.innerHTML = "Shared";
}
