# GRAPHQL-CASTS
An example repo using relay, react, and express-graphql

## Getting Up and Running
Server and Client side have separate `package.json` and `yarn.lock` files

### Server: Install
From the root project folder, run `yarn`

### Server: Running the project
This must be done every time a new terminal window is opened and used for the
server side.

- Open up a tab in the terminal and run: `yarn run dev` 
- Open up a tab in the terminal. From the root project folder, run: `yarn run json-server`

### Server: Debugging
Requires the [Node.js V8 inspector extension](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en)

To debug the server enter a `debugging` line in the server codebase.

Example: `./users/schema/schema.js`
```javascript
resolve(parent, args) {
  debugger;
  return Book.findById(args.id);
},
```

Then run `yarn run debug` to run the server in debug mode. Open Chrome and the
inspector (dev tools). Click the green Node.js V8 inspector extension icon. Use
breakpoints as necessary to move through the code and inspect.

## Express-GraphQL Notes
The GraphQL schema docs are located in: `users/schema`

### Node
.nvmrc added to both Server and Client side for node version consistency

