'use strict'

class DockerController {

    index({request, response}){
        response.implicitEnd = false;
        
        const Docker = require('dockerode');

        const docker = new Docker();

        docker.listContainers(function(err, containers){
            response.json({data: containers});
        });
    }
}

module.exports = DockerController
