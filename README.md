# beebee-insurance-docker

Romans Jefremovs
rjefremovs@gmail.com

BeeBeeInsurance app

BeeBeeInsurance is a microservices based application built to offer users car insurance Casco proposals from two or more insurance companies.
The structure of incorporation of the system is presented on this diagram: 
 
On the diagram it is shown Insurance Broker Application, which includes front-end and back-end services. Front-end is based on React library and node.js.
Back-end service is Java REST based application which can receive, send, and handle data as http requests and responses. The Back-end Insurance Broker service build using Maven tool, and tests are supported by Junit and Mockito. Data is stored using H2 embedded database.

Insurer A and Insurer B are insurance companies which creates and sends their proposals for the user’s car insurance. Insurer’s handling block can be extended and connect more than 2 insurance companies.

Car Central Repository collects and stores data about all in the state registered cars.
Information about API’s for all services except UI is presented by swagger-ui tool.
Application is containerized using Docker desktop and Linux virtual platform for Windows.
Using docker-compose all containers are bind into one cluster with static IP address for every container: 
192.168.1.102:3000 - ins-broker-frontend
192.168.1.103:8800 - insurance-broker
192.168.1.104:8181 - insurer-a
192.168.1.105:8282 - insurer-b
192.168.1.106:8881 - cars-central
192.168.1.107:8082 - swagger-ui

To run the application please follow these steps:
1.  To run application on Windows it is necessary to open Command prompt as administrator and create additional IP addresses for Hyper-V internet adaptor using this code:

FOR /L %A IN (102,1,107) DO netsh interface ipv4 add address “vEthernet (WSL)” 192.168.1.%A 255.255.255.0

To check newly created IP addresses for the Hyper-V use:
        ipconfig /all

2.  Then go to the folder where the application is stored, for example:
            cd C:\Dev\java-aggregator\docker-compose

In Docker the application can be built and started using this command in Command prompt:
docker-compose up --build -d

Please wait for approximately 5-10 minutes for Docker to download, install and run all libraries and services.

3.  Then, it is necessary to store sample data in the Car Central Repository. In this case, for example, use Postman to send POST request to hyperlink:
http://192.168.1.106:8881/newcar
In the body of the request sample data should be presented in json format, for example:
{
    "plateNumber": "AA1234",
    "docNumber": "AF6543214",
    "carMake": "BMW",
    "makeYear": 2010,
    "ownerName": "John Rambo",
    "carPrice": 30000
}

4.  User interface can be found using this link: http://192.168.1.102:3000
Pushing button “Receive New Offer” UI get rendered to the offer request page,where user should insert data about 
the car he wants to get insurance offers.
There are 5 fields which should be filled:
Plate number – String;
Document number – String;
Car price – Integer;
Phone number – String;
Email – String.
Using sample data values could be: AA1234, AF6543214, 30000, 22288888, email@email.com.

And by pushing the button “Request insurance offers” next page should appear with the table created using proposals from insurance companies.

Car Price should be validated by Insurer’s services, if car price from the Car Central Repository is higher or smaller more than by 10% of 
the price from Car Central Repository, the Insurance sum should be taken as the Car Price from Car Central Repository.

5.  Using link 192.168.1.107:8082 you can open Swagger-ui service and find documentation for all service’s API’s.

