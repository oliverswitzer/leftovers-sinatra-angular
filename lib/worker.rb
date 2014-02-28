# worker.rb

# require 'timeout'
# require 'queue_classic'

# FailedQueue = QC::Queue.new("failed_jobs")

# class MyWorker < QC::Worker
#   def handle_failure(job, e)
#     FailedQueue.enqueue(job[:method], *job[:args])
#   end
# end

# worker = MyWorker.new

# trap('INT') {exit}
# trap('TERM') {worker.stop}

# loop do
#   job = worker.lock_job
#   Timeout::timeout(5) { worker.process(job) }
# end