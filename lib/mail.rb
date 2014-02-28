# mail.rb
require 'mail'
# require 'sidekiqworker'

class Confirmation 

  def self.deliver

    SidekiqWorker.perform_async("bob", 5)

    mail = Mail.new do
      from    'keithwilliamsjr@gmail.com'
      to      'oliverswitzer@gmail.com'
      subject 'Worky workie'
      body    "IT WORKS!"
    end

    Mail.defaults do
      delivery_method :smtp, address: "localhost", port: 1025
    end

    mail.deliver
  end

end

