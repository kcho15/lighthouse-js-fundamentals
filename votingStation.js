const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



/* function chooseStations must return the array ['Bright Lights Elementary', 
'Moose Mountain Community Centre'] 
- initialize new array within function using let goodStations = []
- loop through array and push the stations that meet the requirements (capacity > 20, be a school or community centre)
- return the new array
*/ 

function chooseStations (stations) {
  // Declare variable to save good stations to a new array locally
  const goodStations = []
  // Loop through all stations and save as variable 'station'
  for (const station of stations) {
    const capacity = station[1]
    // Condition check of capacity of building
    if (capacity > 19) {
    
      const typeBuilding = station[2]
      // Condition check of eligible building type
      if (typeBuilding === 'school' || typeBuilding === 'community centre') {
        // push eligible building referencing by name, the first element in array, to new array
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations)); 