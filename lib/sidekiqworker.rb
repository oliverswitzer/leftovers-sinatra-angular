# sidekiqworker.rb

class SidekiqWorker
  include Sidekiq::Worker

  def perform(name, count)
    puts "doing hard work #{name}, #{count}"
  end
end