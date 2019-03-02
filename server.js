const hapi = require('hapi');
const server = hapi.server({
      port: 3000,
      host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/employees',
    handler: (req, h) => {
        let employees = [
        {
           name: "Dhananjay Kadam",
           email: "dkadam@ccc.com"
         },
        {
           name: "Dhananjay Kadam",
           email: "dkadam@ccc.com"
         }
        ];
        return employees;
    }
})


const bootUpServer = async () => {
      await server.start();
      console.log(`Server is running at ${server.info.uri}`);
     process.on('unhandledRejection', (err) => {
             console.log(err);
             process.exit(1);
     })
}
bootUpServer();