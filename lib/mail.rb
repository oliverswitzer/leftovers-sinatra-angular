# mail.rb
require 'mail'
# require 'sidekiqworker'

class Confirmation 

  def self.deliver

    SidekiqWorker.perform_async("bob", 5)

    # mail = Mail.new do
    #   from    'mikel@test.lindsaar.net'
    #   to      'you@test.lindsaar.net'
    #   subject 'This is a test email'
    #   body    File.read('body.txt')
    # end
  end

end

