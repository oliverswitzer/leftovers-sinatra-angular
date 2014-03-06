class Confirmation 

  def self.deliver(number, pickup_id)
    SidekiqWorker.perform_async(number, pickup_id)  
  end

end

