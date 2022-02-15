# Univent
WHAT IS UNIVENT/MERNSTACK?
  Univent is a MERN stack webapplication.
  
  Mern Stack
  MongoDB: NoSQL Database which stores "Documents" in "Collections" (instead of "records: in "tables" as in SQL). Stores application data(users. products...) no enforcement of       schema or relation(can still build one if needed), better performance.
  
  Express: A node framework which simplifies writing server-side code and logic. Based on Node, but offers same functionalities and more. Middle-ware based, funnel requests         through functions, Includes routing view rendering and more(simplifies Node.js).
  
  React: a client-side browser library which allows you to build highly reactive user interfaces (FrontEnd). Renders UI with Dynamic data, Handles user input, Comunicates with       backend.
  
  Node: a server-side runtime(javascript on serverside alternative to PHP). Listen to requests and send responses, execute server-side logic, interact with database and files(used 
  alongside express.

  Ajax requests and responses from client side React to backend server without reloading the page on the client(data: JSON format)
  
  Frontend
  Everything is on a single page rerendered with react-router-dom when the user enters a new url(goes to a new page). State management(redux and hooks) to manage states of certain   parts of the webpage.
  
  Backend
  Decoupled ends, backend is built as an API(things exposure certain entry points which other things can use). Clearly defined entry points so other users can use them. In Univent   we use REST API(request path+ httpmethod(="endpoint") identify a resource/action on the server, RESTApi is Stateless, and decoupled from the frontend(use with any front end). From your react app you send requests to node express app, then node express server which talks to database.
