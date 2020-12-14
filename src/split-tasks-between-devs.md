First there needs to be an actual page. I noticed that I did a few things simultaneously, kinda Agile driven.

You need to setup the skeleton of the page first (header, content / body, footer) and this for both pages (home and add car).
Once that is in place, you can start thinking about the actual functionality.

Normally, I'm used to design to have already put together every sketch for the functionality. I figured out the design along the way just by playing a bit.

What's important is to know how data should flow and what the interactions are. If there is a rough vision between all devs, then they can keep that in mind while developing the dumb / stateless components.

There are basically 4 main components: the search bar, the search results, the ranking cars component and the add car.
They can all be worked on seperately, so individual tasks:

dev 1: create the search bar component
dev 2: create the search results component
dev 3: create the ranking cars component
==> search bar and ranking cars make use of user input, so either of the devs can work on making a controlled input and the other dev can just use it

After the components are finished, come back together and determine how to connect the components in their parent component. What needs to interact with what, what states are needed to reflect effects of user interaction? Then determine who (either pair programming or alone) will implement the state of Home and wire everything together. The 2nd dev can work on implementing the add car component (front-end) and the 3d dev can work on implementing the endpoints (getting cars and posting cars).

I think I spent approximately 10 hours on putting this project together. Quite some time thinking also on how whether I wanted to use a fake json server or use the local storage of the browser. I decided to use the latter, because that would not require another process to run, nor deployed. So more out of timeboxing rather than actually having an app in production. Also thought on how to implement the data state management. I think I spent most time on UI though, it was hard for me to work on some functionality, when my eyes are burning because of the ugly UI.
