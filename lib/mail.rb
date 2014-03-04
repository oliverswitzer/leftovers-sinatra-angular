require 'mail'

class Mail 

  def self.deliver
    SidekiqWorker.perform_async("bob", 5)  
  end

end

