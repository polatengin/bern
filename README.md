# GrowCherry application (Fast and local groceries delivery)

This is the **GrowCherry** project from [Hackorona - Creativity will not be quarantined](https://hackorona.in.dev/) Hackathon

## Problem

The coronavirus pandemic created new restrictions that grocery stores and Supermarkets  have to work under: In Israel, a business must not hold more than 10 customers within the same store. It was also said that citizens should avoid leaving home as much as possible.

* Due to these new restrictions a large number of customers went through to place food orders through digital systems.

* Large food companies are unable to accept multiple orders at the same time, and hold a small number of delivery workers. Which leads to high orders delays, delays in deliveries, and inaccessibility at branches.

* At the same time, small grocery stores are losing their customers inability to make deliveries

## Solution

We're going to build a system of 3 different platforms for different end users affected by the outbreak of the Coronavirus

* Small grocery stores - losing customers due to the lack of shipping and online ordering system so we are going to create a digital system that can fit any grocery.

* Food Courier - Many people have lost their permanent jobs due to the Corona crisis, we want to create for those individuals who can work as a food courier - a food delivery system.

* Digital food ordering system - For people who find it difficult to leave their home, or have difficulty ordering through other sites because of long waiting times, lack of couriers or lack of products.

## Projects

There are 2 projects in this repo, `courier` (Mobile app project), `mock-api` (Mock Backend project)

* `mock-api`: This project uses `json-server` npm package to generate mock api which returns `json` output. Also it has `faker` npm package to generate real-looking data, such as, first name, last name, product name, location, address, etc.

* `courier`: This project uses `ionic` to build an _IOS_ and _Android_ apps for elderly people. Underlyingly this project uses `angular` with `typescript` and `sass`

