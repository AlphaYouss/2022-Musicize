======================================================================
=========================
=============
                README
=============
=========================
======================================================================

This document is meant as support for this PoC, for more information about messaging read the research in the research document.
The following video is being used to create the Poc: 
    https://www.youtube.com/watch?v=1IF4uu0ptk4&ab_channel=DotNetCoreCentral
The code is available on GitHub, although it's outdated:
    https://github.com/choudhurynirjhar/masstransit-demo

**************************
        Summary:
**************************
The PoC has a working messaging system that uses the queue based load leveling pattern.
You will need a working RabbitMQ server, this can be downloaded or fetched via Docker.
The default port of RabbitMQ is "15672", the default login credentials are:
    * Username : "guest"
    * Password : "guest"
When you're logged in, in the exchange tab you will find all exchanges. These exchanges will pass the message along, so it will be able to create a queue.
Whenever it hits the second exchange, most likely called [name]-queue, it will be put in the queue. Check out the queue tab for more details.
Messages in the queue will be stored in a safe space, these messages will be sent when the receiver is online.
After the messages are sent, the receiver will get them.
Check out the PoC to see what's being used to make it possible.

**************************
      PoC overview:
**************************
The PoC contains the following components:
    - SharedLibrary
    - WebApplicationSender
    - WebApplicationReciever

In the "SharedLibrary" you'll be able to find classes that are being used in the whole system, like the model and the RabbitMQ settings. It's common to have a shared library since it will be used in both the sender as the receiver.
The WebApplicationSender is being used to send messages in this instance, this could be replaced by any application instance (e.g a console application or a part or another microservice that is able to push data).
The WebApplicationReciever is receiving all the messages that are being sent by the sender (microservice). After getting these messages, the system will be able to perform anything with them.