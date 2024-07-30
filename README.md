"# web-app" 
Repository Link: https://github.com/VictorModupe/web-app 
VERCEL link: https://web-app-phi-rust.vercel.app/ 
Brief Description of Your Web App
This web app is a simple travel destination tracker. It allows users to keep track of various travel destinations they are interested in, including details such as the name, country, description, and whether they have visited the location. The app displays a list of destinations, making it easy for users to view and update their travel plans.

Instructions on How to Use the Web App
Open the App:

When you open the app, you will see a list of travel destinations with their names, countries, descriptions, and visited statuses.
View Destinations:

The main page displays a list of destinations. Each destination includes the following details:
Name: The name of the destination.
Country: The country where the destination is located.
Description: A brief description of the destination.
Visited Status: Indicates whether the destination has been visited or not.
Mark a Destination as Visited:

You can implement a feature to mark destinations as visited. For now, the visited status is shown as either 'Visited' or 'Not Visited'.
To add this functionality, you would typically include a button or checkbox next to each destination that allows users to toggle the visited status.
Add New Destinations:

To add a new destination to the list, you can implement a form where users can input the details of the new destination. This form would include fields for the name, country, description, and an initial visited status.
The new destination can then be added to the state using the setDestinations function.
Modify or Remove Destinations:

Users may want to edit the details of an existing destination or remove a destination from the list. You can implement edit and delete buttons for each destination to enable these actions.
Editing can involve displaying the current details in a form for modification, while deleting would remove the destination from the state.
Save Changes:

Ensure any changes made by the user (e.g., marking as visited, adding new destinations, or editing existing ones) are saved appropriately. This might involve updating the state and possibly storing the data persistently using local storage or a backend service.
Assumptions and Additional Features Implemented
Initial State:

The app starts with a predefined list of destinations, each with properties: id, name, country, description, and visited.
Toggling Visited Status:

A feature to toggle the visited status of a destination has been implemented. This allows users to mark a destination as visited or not visited.
Adding New Destinations:

A form is provided to add new destinations, including fields for the name, country, and description. The new destination is then added to the state with an initial visited status of false
  If You Had More Time, What Would You Improve or Add? 
User Authentication:

Adding user authentication to allow multiple users to maintain their own lists of destinations.
Enhanced UI/UX:

Improving the user interface and user experience with better styling, animations, and responsive design.
Using a UI library like Material-UI or Bootstrap for a more polished look.
Interactive Map:

Integrating an interactive map feature to visualize the destinations on a map. This could use APIs like Google Maps or Mapbox.
Rating and Reviews:

Allowing users to rate and review destinations, adding a social aspect to the app.
Travel Planning Tools:

Including tools for travel planning, such as itinerary creation, budget tracking, and reminders.