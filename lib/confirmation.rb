class Confirmation 

  def self.deliver(number)
    SidekiqWorker.perform_async(number)  
  end

end

