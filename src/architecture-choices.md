I need a main component that fetches cars from an API and saves it in a state the moment the application is rendered.
I call this home. In here I can render the cars that need to be rendered, as well as a search bar that filters out cars based on user input. I put this in the same home component, because they work together and it saves API calls;

There was a point in which I asked myself whether I want to choose React Redux or React useReducer to manage state. However, since I was only dealing with one entity (an array of cars), I decided to choose the simple React useState approach.

Then there was the functionality to add new cars. I did not think this should be in the home page, because home is for read functionality. I didn't want to mix functionalities. Adding cars and searching for cars are independent, so I decided to make a different page that adds cars, along with a state that reflects the api call state. In case of success, the user can add a new page or then go to the home section to find the newly added car.

For the third story, I asked myself whether I want to have a new container / page to rank cars on their annual costs. Since, again, I thought that it was a reading functionality, I deciced to put this in the home page, because I already had the data. If I would make a new page, I would have to make another API call, which is data usage inefficient. I used the home component to handle all the logic and wanted to make the ranking component as dumb as possible, only providing info about the user input, so that the home component would handle the rest and pass the result to its child component.

The improvements of this code could be the following:

- When you have added a new car and you want to go to home, all the car data is being fetched again, because only home is responsible for getting the cars. This means unnessary calls to the API. It could be solved by using a state manager (React Redux) and put that on the top level of the application, that it will always have the data whether or not you switch pages. The problem with THAT however, is that if as a user I am not interested in fetching cars but directly and only want to add cars, I would do an unnessary fetch cars call. So depending on what the use case would be for users of this application, one could consider either of the two approaches. I chose for the current approach also from a more practical point of view: when will the data be stale? Imagine if hundreds of car dealers are using the application at the same time, if you would not fetch the latest cars, then you would work with stale data, not providing the best service to the customers.

Speaking of which, some nice event based updates would be nice. So if data from the database would be updated, then a hook would push updates to the front-end application and the application would update its state automatically.

- There is no pagination. So if I would have thousands of cars and I would want to render all of them at once, it would impact performance on a massive scale. With more cars than my initial data, pagination would help a lot, especially since we're working with images (that have a source, which need to be fetched etc).

- There is no user input sanitation, so it's vulnerable for attacks. I didnt implement it because of time boxing.

- Obviously this code is not production ready. I need actual API endpoints. I just mocked it using the localstorage of the browser.
