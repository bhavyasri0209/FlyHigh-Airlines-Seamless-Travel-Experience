function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  if(email && pass){
    alert("Login Successful!");
    window.location.href = "home.html";
  } else {
    alert("Please enter details");
  }
}

function calculateAge(){
  var dob = document.getElementById("dob").value;
  var birthYear = new Date(dob).getFullYear();
  var currentYear = new Date().getFullYear();
  document.getElementById("age").value = currentYear - birthYear;
}

const flights = [];

for(let i=1; i<=60; i++){
  flights.push({
    name: "Airline " + i,
    from: "Delhi",
    to: i%2==0 ? "Mumbai" : "Chennai",
    price: 3000 + i*50
  });
}

function displayFlights(list){
  const container = document.getElementById("flights");
  container.innerHTML = "";
  list.forEach(f => {
    container.innerHTML += `
      <div class="flight-card">
        <h3>${f.name}</h3>
        <p>${f.from} → ${f.to}</p>
        <p>₹${f.price}</p>
        <button onclick="location.href='booking.html'">Book Now</button>
      </div>
    `;
  });
}

if(document.getElementById("flights")){
  displayFlights(flights);
}

function searchFlights(){
  const to = document.getElementById("to").value;
  const filtered = flights.filter(f => 
    f.to.toLowerCase().includes(to.toLowerCase())
  );

  if(filtered.length > 0){
    displayFlights(filtered);
  } else {
    document.getElementById("flights").innerHTML =
      "<h3>❌ No flights available for this destination.</h3>";
  }
}
