As a car dealer, I want to search for cars by year and make.

// create the page
// load all cars on rendering on top level
// pass to the searchbar component:
// a function that takes in a search query and filters the search results based on that query
// pass to the search results component:
// the cars that match the search query
// create a searchbar component:
// that takes a prop that can handle input change
// use debounce so that user does not flood the app with complex computations when still busy with typing
// call the inputChange handler after the debounce
// create a search result component that renders all cars matching the search query:
// create card component
// render cars properly

As a car dealer, I want to be able to add new cars to my store.

// create a new page in which you can add a car
// create a form with the relevant inputs
// create state that holds the post state
// mock the post call when submitting
// create error and success state for submit
// create a post call that adds the cars to the database

As a car dealer, I want to recommend to my clients the car with the lowest total annual cost over a period of four (4) years, given the price of fuel (€/L) and the expected distance to travel each month (km/month);

// Since we need to rank cars, it is basically a sorting function that sorts on the existing search results (of car)
// create a component that has two inputs the user can enter: fuel price and distance
// create helper functions that determine the annual costs for a given car
// create a sorting function that sorts based on the annual costs
// the component should have a button, that on clicked on, should render cars based on ranking
// component should be unaware of the cars, as it's only job is do something with the inputs user enters and then handle the input
// parent component should define the actual ranking algorithm, because it has acces to cars
// parent component passes the searchresults onto its child component searcCarResult, so any change is immediately reflected in that component
