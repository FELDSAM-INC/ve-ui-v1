#Nilavu

[![Build Status](https://travis-ci.org/VirtEngine/Nilavu.png?branch=1.5)](https://travis-ci.org/VirtEngine/Nilavu)

Nilavu is a [Rails 4.2.x](http://guides.rubyonrails.org/) Ember.js browser based user interface for [VirtEngine](https://virtengine.com). 

VirtEngine is a powerful Cloud Platform that can be utilized to build Private Clouds or [Public Clouds](https://docs.virtengine.com/#billing)

# I am an individual / enterprise / startup that would like to manage our internal infrastructure

1. Do you want to increase your efficiency in managing your infrastructure?
2. Would like to deploy applications (Custom or Pre-packaged) in seconds?
3. Optimize your infrastructure usage by automatically scaling these applications?
4. Have a self-hosted DigitalOcean like solution?
5. Do you need to convert raw harddisks to cloud storage in a jizzy?
6. Would love to have a fully redundant private cloud that just never goes down?

Utilize our OpenSource private cloud software!

We have an enterprise edition that also enhances our features!

# I am a hosting provider that would like to offer cloud solution.

1. Do you want a DigitalOcean/AWS/Azure like experience for your customers ?
2. Would like to be one of the first providers that offers Platform as a Service with scaling solutions?
3. Want to offer High Availability to your customers?

Visit [VirtEngine](http://virtengine.com) and stay ahead of cluggy/old `SolusVM`.

[VirtEngine](http://virtengine.com) designed for Service Providers!

# Features

[VirtEngine Documentation](https://docs.virtengine.com)

# Blog

[VirtEngine Blog](https://blog.virtengine.com)

##OpenSource

* Launch 100's of Bitnami apps in a second

* Launch 1000's of Docker registry using an intuitive search

* Launch apps, services(db, queue, nosql..) in hybrid cloud in seconds.

* Launch a micro service (public or on premise) in a giant swarm cluster with replication and scaling

##Enterprise

* Integrated billing with WHMCS 

* Secure Containers

* Cloud storage

## Requirements

1. [Ruby 2.3.x](http://ruby-lang.org)
4. [Vertice Gateway](https://github.com/megamsys/vertice_gateway)


## What does this product look like ?

The UX/UI design was done by [enixel](http://enixel.com) and our partner [DET.io](http://det.io)

###Sneakpeak

![Dashboard](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_dashboard.png)

###Pre-signup
![Presignup](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_presignup.png)

###Marketplace
![Marketplace](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_mktplace.png)

###Management
![Management](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_management.png)

###Log/Activity
![Log activity and Monitoring](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_logs.png)

###Billing usage
![Billing usage and selector](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_pricing_billing_whmcs.png)

##Enterprise Features

###Billing integration (*WHMCS*, Blesta, ...)
![Billing Integration WHMCS](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_subcription.png)

###Multi region cluster (You can have Datacenters in `chennai`, `sydney`...)
![Multi region/Cluster launcher WHMCS](https://github.com/megamsys/nilavu/blob/1.5/public/sneakpeak/megam_vertice_multiregion_launcher.png)

## Compile from source

You'll need `ruby 2.x` and [vertice_gateway](https://github.com/megamsys/vertice_gateway.git) setup.

### Fork

After you have forked a copy of https://github.com/megamsys/nilavu.git

### Steps

```

git clone https://github.com/<your_github_id>/nilavu.git

cd nilavu

cp ./hooks ./git/.hooks

bundle update

bundle install

```

Type http://localhost:3000

Now you are all set.

# Documentation

For [documentation] (http://docs.virtengine.com)
    [blog] (https://blog.virtengine.com)

# License

MIT


# Authors

Maintainers: Megam (<info@megam.io>)
Distributors (Public Cloud Edition): DET.io (<jonathan@det.io>)

# Tools

Test user interfaces with any browser both manually and automatically! A great way to ensure user experience is always as expected.

[BrowserStack](https://www.browserstack.com/images/layout/browserstack-logo-600x315.png)
