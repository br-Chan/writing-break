---
title: SOFTENG 325 Notes
description: SOFTENG 325 Notes
date: 2025-10-30 22:50:00
tags:
noToc: true
---

## REST API Design

```
Request header:
Path param:
Search param:
Request body:
Response codes:
Response body:
```

## Quality Attribute Scenarios

**Performance**

| Portion of Scenario | Possible Values                                                                        |
|---------------------|----------------------------------------------------------------------------------------|
| Source              | Internal or external to the system                                                     |
| Stimulus            | Arrival of a periodic, sporadic, or stochastic event                                   |
| Artifact            | System or one or more components in the system                                         |
| Environment         | Operational mode: normal, emergency, peak load, overload                               |
| Response            | Process events, change level of service                                                |
| Response Measure    | Latency, deadline, throughput, jitter, miss rate                                       |

**Availability**

| Portion of Scenario | Possible Values                                                                                                                                                    |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source              | Internal/external people, hardware, software, physical infrastructure                                                                                              |
| Stimulus            | Fault: omission, crash, incorrect timing, incorrect response                                                                                                       |
| Artifact            | Processors, communication channels, persistent storage, processes                                                                                                   |
| Environment         | Normal operation, startup, shutdown, repair mode, degraded operation, overloaded operation                                                                         |
| Response            | Prevent the fault from becoming a failure (detect and recover)                                                                                                      |
| Response Measure    | Time interval when the system must be available, availability percentage, time to detect the fault, time to repair the fault, time interval in which system can be in degraded mode, proportion of class of faults that the system prevents or handles without failing |

**Modifiability**

| Portion of Scenario | Possible Values                                                                                                                                                                                                                     |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source              | End user, developer, system administrator                                                                                                                                                                                           |
| Stimulus            | A directive to add/delete/modify functionality, or change a quality attribute, capacity, or technology                                                                                                                              |
| Artifact            | Code, data, interfaces, components, resources, configurations, etc.                                                                                                                                                                 |
| Environment         | Runtime, compile time, build time, initiation time, design time                                                                                                                                                                     |
| Response            | One or more of the following: make modification, test modification, or deploy modification                                                                                                                                          |
| Response Measure    | Cost in terms of number, size, complexity of affected artifacts; effort; calendar time; money; extent to which this modification affects other functions or quality attributes; or new defects introduced                            |

**Security**

| Portion of Scenario | Possible Values                                                            |
|---------------------|----------------------------------------------------------------------------|
| Source              | Internal or external human or another system unknown to our system         |
| Stimulus            | Unauthorised attempt to display/change/delete data, access system services, change system behaviour, reduce availability                     |
| Artifact            | System services, data within system, component/resources of system, data produced/consumed by system                           |
| Environment         | System is online/offline, connected/disconnected from network, behind firewall / open to network, fully/partially/not operational                   |
| Response            | System continues normal operation without disclosing protected info, records sus activity                                    |
| Response Measure    | Harms against system in terms of time/services/assets/etc                           |

**Usability**

| Portion of Scenario | Possible Values                                                            |
|---------------------|----------------------------------------------------------------------------|
| Source              | End user, possibly in specialised role         |
| Stimulus            | Tries to use efficiently, learn to use, minimise impact of errors, adapt the system, configure the system                     |
| Artifact            | System or portion of system being interacted with                            |
| Environment         | Runtime, configuration time                 |
| Response            | System should provide user with features needed or anticipate user's needs                                  |
| Response Measure    | Task time, no. of errors, tasks accomplished, user satisfaction, knowledge gain, successful : total operations, time/data lost when error occurs                           |

**Testability**

| Portion of Scenario | Possible Values                                                            |
|---------------------|----------------------------------------------------------------------------|
| Source              | Unit/integration/system/acceptance testers, end users (running manually or using automated test tools)         |
| Stimulus            | Set of tests executed due to completion of coding task / sub-system integration / whole system implementation, delivery of system to customer                     |
| Artifact            | Portion of system being tested                           |
| Environment         | Design/development/compile/integration/deployment/run time      |
| Response            | Execute test suite and capture results, capture activity resulting in fault, monitor system state                                       |
| Response Measure    | Effort to find fault/s, effort to achieve % of state space coverage, probability of fault being revealed in next test, time to prep test environment, time to perform tests, effort to detect faults, length of longest dependency chain in test, reduction in risk exposure                           |

## Tactics

<img src="/actual-blog/img/2_availability-tactics.png" alt="ye">
<img src="/actual-blog/img/2_performance-tactics.png" alt="ye">
<img src="/actual-blog/img/2_security-tactics.png" alt="ye">
<img src="/actual-blog/img/2_modifiability-tactics.png" alt="ye">
<img src="/actual-blog/img/2_testability-tactics.png" alt="ye">

For Usability: support user intiative, support system initiative, separate UI (e.g. MVC pattern)

## Architectural Patterns

- Client-server
- Broker pattern
- Layered pattern
- Peer-to-peer pattern
- Pipe and filter pattern
- Pub-sub pattern

See actual slides for better details.

## Structures and Views

### Module Structures

Elements are modules representing functional responsibility.

- Decomposition view: larger modules decomposed into smaller ones until it is understandable
- Uses view: software unit uses another if correctness of 1st requires 2nd one
- Class view: A inherits B (OOP)
- Data model view: describes data entities and relationships (like ER diagram)

See actual slides for diagrams.

### Component and Connector Structures

How elements communicate with each other at runtime to function.

- Client-server view: clients/servers are the components, protocols + messages are the connectors
- Concurrency view: logical threads (computation sequence that can be allocated to separate physical processor) are components, communication channels are connectors
- Shared data view (components and connectors create/store/access/persist data, showing how data is produced and consumed by software elements)

See actual slides for diagrams.

### Allocation Structures

Maps software components into external environments; relationships include (execution, testing, deployment).

- Deployment view (how software is assigned to hardware-processing and communication elements)
- Work assignment view (which team does what work)

See actual slides for diagrams.