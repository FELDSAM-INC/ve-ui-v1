require 'whmcs'

class Biller::WHMCSSubscriber < Biller::Subscriber
    include Biller::WHMCSRegistrar

    def initialize
      register
    end

    def subscribe(subscribe_options={})
        WHMCS::Client.get_clients_details(subscribe_options)
    end

    def after_subscribe(subscribed)
        result = Biller::Result.new
        puts "----------- subscribed "
        puts subscribed.inspect
        puts "----------- subscribed..."
    end

    def update(update_options)
        WHMCS::Client.update_client(update_options)
    end

    def after_update(updated)
        result = Billy::Result.new
        puts "----------- update"
        puts updated.inspect
        puts "----------- updated..."
    end
end