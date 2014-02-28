# sidekiqworker.rb
require 'mail'

class SidekiqWorker
  include Sidekiq::Worker

  def perform(name, count)
    sleep(10)
    puts "doing hard work #{name}, #{count}"

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