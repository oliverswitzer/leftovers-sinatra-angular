class SidekiqWorker
  include Sidekiq::Worker

  def perform(number)

    keys = YAML::load_file("data/keys.yml")
    # put your own credentials here 
    account_sid = 'AC3552e9a7f1c9aaadacbf1ed005d67b75'
    auth_token = keys["TWILLIO"] 
     
    # set up a client to talk to the Twilio REST API 
    @client = Twilio::REST::Client.new account_sid, auth_token 
    confirmation_num = "" 
    4.times { confirmation_num << rand(1..9).to_s } 
    @client.account.messages.create({
      :from => '+12679662099', 
      :to => number, 
      :body => "Rescuisine Confirmation Number: #{confirmation_num}" 
    })
  end
end