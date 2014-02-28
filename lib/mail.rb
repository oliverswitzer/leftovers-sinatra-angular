require 'mail'

class Confirmation 

  def self.deliver
    SidekiqWorker.perform_async("bob", 5)  
  end

end

